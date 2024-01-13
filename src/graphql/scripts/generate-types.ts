import * as path from 'path';
import * as fs from 'fs';
import { OGM, generate } from 'sgnm-graphql-ogm';
import { parse, print } from 'graphql';

const concatSchema = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const pattern = /[^/\\]+\.((type|dependency)\.definition\.ts)$/;
      const cwd = process.cwd();
      const result = [];

      function findMatchingFiles(directory) {
        const files = fs.readdirSync(directory);

        for (const file of files) {
          const filePath = path.join(directory, file);
          if (fs.statSync(filePath).isDirectory() && file !== 'node_modules') {
            findMatchingFiles(filePath);
          } else {
            if (file.match(pattern)) {
              result.push(filePath);
            }
          }
        }
      }

      findMatchingFiles(cwd);

      const map = {};
      result.forEach((file) => {
        const dir = path.dirname(file);
        if (!map.hasOwnProperty(dir)) map[dir] = [];
        map[dir].push(file);
      });
      let schemaString = '';

      for (const key in map) {
        if (map.hasOwnProperty(key)) {
          const value = map[key];
          await Promise.all(
            value.map(async (file) => {
              const schema = await import(file);
              if (schema.default?.includes('#graphql')) {
                schemaString = schemaString + schema.default;
              }
            }),
          );
        }
      }
      return resolve({
        dirMap: map,
        schemaString,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const generateTypes = async () => {
  console.log('\x1b[36m', 'going for it 🥳');
  const { dirMap, schemaString } = (await concatSchema()) as unknown as any;
  console.log('\x1b[33m', `Collected all of the type definitions 🟢`);
  const ogm = new OGM({
    typeDefs: schemaString,
  });

  await ogm.init();
  await generate({
    ogm: ogm,
    outFile: path.join(process.cwd(), `./src/ogm/types/type-definition.ogm.GENERIC.d.ts`),
  });

  const parsedSchema = parse(schemaString);

  const modifiedSchemaString = print({
    ...parsedSchema,
    definitions: parsedSchema.definitions.map((def) => {
      if (def.kind === 'ObjectTypeDefinition') {
        return {
          ...def,
          fields: def.fields.map((field) => ({
            ...field,
            directives: [],
          })),
          directives: [],
        };
      }
      else  if (def.kind === 'UnionTypeDefinition') {
        return {
          ...def,
          directives: [],
        };
      }
    }),
  });

  await fs.promises.writeFile(
    path.join(process.cwd(), `./src/graphql/schema/type-definition.GENERIC.types.gql`),
    modifiedSchemaString,
    {
      flag: 'w',
    },
  );
  console.log('\x1b[32m', `We're good to go, Happy graphing 🚀`);
};
generateTypes();
