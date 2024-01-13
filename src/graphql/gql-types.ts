
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum ScopeLabelsEnum {
    System = "System",
    Component = "Component",
    FacilityStructure = "FacilityStructure"
}

export enum StatusEnum {
    Started = "Started",
    Finished = "Finished"
}

export enum InputTypeEnum {
    BOOLSUCCESS = "BOOLSUCCESS",
    BOOLYES = "BOOLYES",
    TEXT = "TEXT",
    DATE = "DATE",
    NUMBER = "NUMBER"
}

export enum TimePeriodUnits {
    Minutes = "Minutes",
    Hours = "Hours",
    Days = "Days",
    Weeks = "Weeks",
    Months = "Months",
    Years = "Years"
}

export enum PrewiewProcessType {
    Update = "Update",
    Cancel = "Cancel"
}

export enum RecurrenceType {
    ONE_TIME = "ONE_TIME",
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY"
}

export enum Weekdays {
    MONDAY = "MONDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY",
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY"
}

export enum Positions {
    FIRST = "FIRST",
    SECOND = "SECOND",
    THIRD = "THIRD",
    FOURTH = "FOURTH",
    LAST = "LAST"
}

export enum PreviewOccurrenceUnit {
    MINUTE = "MINUTE",
    HOUR = "HOUR",
    DAY = "DAY",
    MONTH = "MONTH"
}

export enum DelayNoticeUnit {
    HOUR = "HOUR",
    DAY = "DAY"
}

export enum ReminderUnits {
    HOUR = "HOUR",
    DAY = "DAY"
}

export enum OrderBy {
    ASC = "ASC",
    DESC = "DESC"
}

export interface CreateCheckListInput {
    description?: Nullable<string>;
    name?: Nullable<string>;
    tag?: Nullable<Nullable<string>[]>;
    estimatedTime?: Nullable<string>;
    timeType?: Nullable<string>;
    versionNo?: Nullable<string>;
    validityStatus?: Nullable<string>;
    isActive?: Nullable<boolean>;
    checkListType?: Nullable<string>;
}

export interface CheckItemRelationInput {
    id?: Nullable<string>;
    labels?: Nullable<Nullable<string>[]>;
    checkItems?: Nullable<Nullable<CheckListCheckItemsNodeInfo>[]>;
}

export interface CreateRegulationRelationInput {
    id?: Nullable<string>;
    labels?: Nullable<Nullable<string>[]>;
    regulations?: Nullable<Nullable<CreateRegulationInput>[]>;
}

export interface CreateRegulationInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    checkListId: string;
    labels?: Nullable<Nullable<string>[]>;
    regulations: RegulationInput[];
}

export interface DeleteRegulationRelationInput {
    id?: Nullable<string>;
    labels?: Nullable<Nullable<string>[]>;
    regulations?: Nullable<Nullable<NodeInfos>[]>;
}

export interface DeleteCheckItemRelationInput {
    id?: Nullable<string>;
    labels?: Nullable<Nullable<string>[]>;
    checkItems?: Nullable<Nullable<NodeInfos>[]>;
}

export interface NodeInfos {
    id: string;
    labels: Nullable<string>[];
}

export interface CheckListCheckItemsNodeInfo {
    id: string;
    labels: Nullable<string>[];
    props?: Nullable<CheckListCheckItemsProp>;
}

export interface CheckListCheckItemsProp {
    isRequired: boolean;
}

export interface UpdateCheckListInput {
    id?: Nullable<string>;
    payload?: Nullable<CreateCheckListInput>;
}

export interface DeleteCheckListInput {
    id?: Nullable<string>;
}

export interface StartCheckListValueInput {
    scopeId?: Nullable<number>;
    checkListId?: Nullable<number>;
    scopeLabel?: Nullable<ScopeLabelsEnum>;
    taskId?: Nullable<number>;
}

export interface UpdateCheckListValueStatusInput {
    checkListValueId?: Nullable<number>;
    status?: Nullable<StatusEnum>;
}

export interface AcceptRegulationMessageInput {
    checkListValueId?: Nullable<number>;
    regulationId?: Nullable<number>;
}

export interface SubmitChecklistValueEffortInput {
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    effortType?: Nullable<string>;
    description?: Nullable<string>;
    effortDuration?: Nullable<string>;
    checkListValueId?: Nullable<number>;
}

export interface CheckItemInput {
    description?: Nullable<string>;
    name?: Nullable<string>;
    tag?: Nullable<Nullable<string>[]>;
    documentRequired?: Nullable<boolean>;
    isRequired?: Nullable<boolean>;
    photoRequired?: Nullable<boolean>;
    inputType?: Nullable<InputTypeEnum>;
}

export interface CreateCheckItemInput {
    checkListId: string;
    checkItems: CheckItemInput[];
}

export interface UpdateCheckItemInput {
    id?: Nullable<string>;
    payload?: Nullable<CheckItemInput>;
}

export interface DeleteCheckItemInput {
    id?: Nullable<string>;
}

export interface IdLabel {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
}

export interface DocumentInput {
    name?: Nullable<string>;
    url?: Nullable<string>;
}

export interface ImageInput {
    name?: Nullable<string>;
    url?: Nullable<string>;
}

export interface CreateCheckItemValueInput {
    checkListValueId: number;
    checkItemId: number;
    inputValue?: Nullable<JSON>;
}

export interface CreateWorkSpaceMaintenanceMainInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    woCategory?: Nullable<string>;
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    tags?: Nullable<Nullable<string>[]>;
    priority?: Nullable<IdLabels>;
    maintenanceCategory?: Nullable<MaintenanceTypeInput>;
    component?: Nullable<Nullable<ComponentInput>[]>;
    system?: Nullable<Nullable<SystemInput>[]>;
    location?: Nullable<Nullable<LocationInput>[]>;
    documents?: Nullable<Nullable<DocumentInput>[]>;
    images?: Nullable<Nullable<DocumentInput>[]>;
    workspace?: Nullable<IdLabels>;
    workflow?: Nullable<IdLabels>;
}

export interface CodeInput {
    code?: Nullable<string>;
}

export interface UpdateMaintenancePlanInput {
    name?: Nullable<string>;
    id?: Nullable<number>;
    description?: Nullable<string>;
    woCategory?: Nullable<string>;
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    tags?: Nullable<Nullable<string>[]>;
    priority?: Nullable<CodeInput>;
    maintenanceCategory?: Nullable<CodeInput>;
    component?: Nullable<Nullable<IdLabels>[]>;
    system?: Nullable<Nullable<IdLabels>[]>;
    location?: Nullable<Nullable<IdLabels>[]>;
    workspace?: Nullable<IdLabels>;
    workflow?: Nullable<IdLabels>;
}

export interface MaintenanceCategory {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
}

export interface LocationInput {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
}

export interface MaintenanceTypeInput {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
}

export interface SystemInput {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
}

export interface ComponentInput {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
}

export interface UpdateWorkSpaceMaintenanceMainInput {
    id?: Nullable<number>;
}

export interface UpdateMaintenancePrewiewScheduleInput {
    id: number;
    taskStartDate?: Nullable<DateTime>;
    prewiewProcessType: PrewiewProcessType;
}

export interface IdLabels {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
}

export interface ScheduleCheckListInput {
    scheduleUID?: Nullable<string>;
    checklist?: Nullable<IdLabels>;
}

export interface AddChecksToMaintenanceNodesInput {
    maintenance?: Nullable<IdLabels>;
    checkLists?: Nullable<Nullable<ScheduleCheckListInput>[]>;
}

export interface SetMaintenanceTaskStatusInput {
    maintenanceTask?: Nullable<IdLabels>;
    maintenanceTaskScopeItem?: Nullable<IdLabels>;
}

export interface SetCheckListValueInput {
    checkList?: Nullable<IdLabels>;
    checkItem?: Nullable<IdLabels>;
    value?: Nullable<string>;
}

export interface SetWorkSafetyRegulationInput {
    checkItem?: Nullable<IdLabels>;
    value?: Nullable<string>;
}

export interface CheckItemValueInput {
    value?: Nullable<IdLabels>;
}

export interface FileUploadMetaInput {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    key?: Nullable<string>;
}

export interface RegulationInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
}

export interface UpdateRegulationInput {
    id?: Nullable<string>;
    payload?: Nullable<RegulationInput>;
}

export interface DeleteRegulationInput {
    id?: Nullable<string>;
}

export interface CreateSchedulerInput {
    uid?: Nullable<string>;
    maintenancePlan?: Nullable<IdLabels>;
    supportPlan?: Nullable<IdLabels>;
    workspace?: Nullable<IdLabels>;
    name?: Nullable<string>;
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    recurrenceType?: Nullable<RecurrenceType>;
    monthlyOccurrence?: Nullable<MonthlyOccurrenceInput>;
    weeklyOccurrence?: Nullable<WeeklyOccurrence>;
    dailyOccurrence?: Nullable<DailyOccurrence>;
    previewOccurrence?: Nullable<PreviewOccurrence>;
    notificationTypes?: Nullable<NotificationTypes>;
    reminder?: Nullable<ReminderInput>;
    delayNotice?: Nullable<DelayNoticeInput>;
    oneTimeOccurrence?: Nullable<OneTimeOccurrence>;
}

export interface DelayNoticeInput {
    value?: Nullable<number>;
    unit?: Nullable<DelayNoticeUnit>;
}

export interface ExactOccurrenceDayOfMonth {
    value?: Nullable<string>;
}

export interface WeekdayOccurrenceOfMonth {
    weekDay?: Nullable<Weekdays>;
    position?: Nullable<Positions>;
}

export interface PreviewOccurrence {
    value?: Nullable<number>;
    unit?: Nullable<PreviewOccurrenceUnit>;
}

export interface NotificationTypes {
    mail?: Nullable<boolean>;
    im?: Nullable<boolean>;
}

export interface ReminderInput {
    value?: Nullable<number>;
    unit?: Nullable<ReminderUnits>;
}

export interface MonthlyOccurrenceInput {
    occurrenceMonth?: Nullable<Nullable<number>[]>;
    exact?: Nullable<ExactOccurrenceDayOfMonth>;
    weekday?: Nullable<WeekdayOccurrenceOfMonth>;
    timeString?: Nullable<string>;
}

export interface WeeklyOccurrence {
    occurrenceDays?: Nullable<Nullable<Weekdays>[]>;
    timeString?: Nullable<string>;
}

export interface DailyOccurrence {
    time?: Nullable<string>;
}

export interface OneTimeOccurrence {
    dateTime?: Nullable<string>;
}

export interface RescheduleMaintenanceTaskInputs {
    dateTime?: Nullable<string>;
    timezone?: Nullable<string>;
    schedulerId?: Nullable<number>;
}

export interface RescheduleSupportTaskInputs {
    dateTime?: Nullable<string>;
    timezone?: Nullable<string>;
    schedulerId?: Nullable<number>;
}

export interface CreateSlaInput {
    parentOfWorkFlow: string;
    workSpaceId: number;
    name: string;
    description?: Nullable<string>;
    tag?: Nullable<string[]>;
    canExtendTime: boolean;
    slaApprover?: Nullable<Nullable<string>[]>;
    isActive: boolean;
    blockStates?: Nullable<Nullable<string>[]>;
}

export interface CreateSubSlaInput {
    parentOfSla: string;
    name: string;
    description?: Nullable<string>;
    tag?: Nullable<string[]>;
    calendarOfSubSla?: Nullable<string>;
    startState: string;
    endState: string;
    time: string;
}

export interface UpdateSlaInput {
    id: number;
    parentOfWorkFlow?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    tag?: Nullable<Nullable<string>[]>;
    canExtendTime?: Nullable<boolean>;
    slaApprover?: Nullable<Nullable<string>[]>;
    blockStates?: Nullable<Nullable<string>[]>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
}

export interface UpdateSubSlaInput {
    id: number;
    name?: Nullable<string>;
    description?: Nullable<string>;
    tag?: Nullable<Nullable<string>[]>;
    startState?: Nullable<string>;
    endState?: Nullable<string>;
    calendarOfSubSla?: Nullable<string>;
    time?: Nullable<string>;
    parentOfSla?: Nullable<string>;
    isDeleted?: Nullable<boolean>;
}

export interface CreateSlaCalendarInput {
    name: string;
    description?: Nullable<string>;
    tag?: Nullable<string[]>;
}

export interface WorkingHoursInput {
    slaCalendarId?: Nullable<number>;
    workingDays?: Nullable<Nullable<WorkingHoursDay>[]>;
}

export interface WorkingHoursDay {
    day?: Nullable<string>;
    workingHours?: Nullable<Nullable<WorkingHoursArray>[]>;
}

export interface WorkingHoursArray {
    startTime?: Nullable<Date>;
    endTime?: Nullable<Date>;
}

export interface CreateWorkSpaceSupportMainInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    woCategory?: Nullable<string>;
    startDate?: Nullable<string>;
    endDate?: Nullable<string>;
    tags?: Nullable<Nullable<string>[]>;
    priority?: Nullable<IdLabels>;
    supportCategory?: Nullable<SupportTypeInput>;
    component?: Nullable<Nullable<ComponentInput>[]>;
    system?: Nullable<Nullable<SystemInput>[]>;
    location?: Nullable<Nullable<LocationInput>[]>;
    documents?: Nullable<Nullable<DocumentInput>[]>;
    images?: Nullable<Nullable<DocumentInput>[]>;
    workspace?: Nullable<IdLabels>;
    workflow?: Nullable<IdLabels>;
}

export interface SupportCategory {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
}

export interface SupportTypeInput {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
}

export interface UpdateWorkSpaceSupportMainInput {
    id?: Nullable<number>;
}

export interface UpdateSupportPrewiewScheduleInput {
    id: number;
    taskStartDate?: Nullable<string>;
    prewiewProcessType: PrewiewProcessType;
}

export interface AddChecksToSupportNodesInput {
    support?: Nullable<IdLabels>;
    checkLists?: Nullable<Nullable<ScheduleCheckListInput>[]>;
}

export interface SetSupportTaskStatusInput {
    supportTask?: Nullable<IdLabels>;
    supportTaskScopeItem?: Nullable<IdLabels>;
}

export interface TaskOptionProperties {
    page: string;
    limit: string;
    orderBy?: Nullable<OrderBy>;
    orderByColumn?: Nullable<string>;
}

export interface AddNodeToTaskInput {
    identifier?: Nullable<string>;
    variableName?: Nullable<string>;
    value?: Nullable<Nullable<NodeValue>[]>;
    label?: Nullable<Nullable<string>[]>;
}

export interface NodeValue {
    id?: Nullable<string>;
    amount?: Nullable<string>;
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    effortDuration?: Nullable<string>;
    effortType?: Nullable<string>;
    description?: Nullable<string>;
}

export interface DeleteNodeFromTaskInput {
    rootId?: Nullable<string>;
    rootLabel?: Nullable<Nullable<string>[]>;
    variableName?: Nullable<string>;
    childId?: Nullable<string>;
    childLabel?: Nullable<Nullable<string>[]>;
}

export interface CreateWorkFlowInput {
    description?: Nullable<string>;
    tag?: Nullable<Nullable<string>[]>;
    name?: Nullable<string>;
    default?: Nullable<boolean>;
    workSpaceId?: Nullable<string>;
    taskTypeCode?: Nullable<string>;
}

export interface UpdateWorkFlowInput {
    id?: Nullable<number>;
    labels?: Nullable<string[]>;
    workSpaceId?: Nullable<number>;
    description?: Nullable<string>;
    isActive?: Nullable<boolean>;
    tag?: Nullable<Nullable<string>[]>;
    name?: Nullable<string>;
    default?: Nullable<boolean>;
}

export interface IMutation {
    createCheckList(createCheckListInput: CreateCheckListInput): CheckList | Promise<CheckList>;
    updateCheckList(updateCheckListInput: UpdateCheckListInput): Nullable<CheckList> | Promise<Nullable<CheckList>>;
    deleteCheckList(deleteCheckListInput: DeleteCheckListInput): Nullable<CheckList> | Promise<Nullable<CheckList>>;
    createCheckListCheckItemRelation(createCheckItemRelationInput: CheckItemRelationInput): CheckList | Promise<CheckList>;
    updateCheckListCheckItemRelation(updateCheckItemRelationInput: CheckItemRelationInput): CheckList | Promise<CheckList>;
    deleteCheckListCheckItemRelation(deleteCheckItemRelationInput: DeleteCheckItemRelationInput): CheckList | Promise<CheckList>;
    createCheckListRegulationRelation(createRegulationRelationInput: CreateRegulationRelationInput): CheckList | Promise<CheckList>;
    deleteCheckListRegulationRelation(deleteRegulationRelationInput: DeleteRegulationRelationInput): CheckList | Promise<CheckList>;
    startCheckListValue(startCheckListValueInput: StartCheckListValueInput): CheckList | Promise<CheckList>;
    startCheckListValueForSupport(startCheckListValueInput: StartCheckListValueInput): CheckList | Promise<CheckList>;
    updateCheckListValueStatus(updateCheckListValueStatusInput: UpdateCheckListValueStatusInput): CheckList | Promise<CheckList>;
    acceptRegulationMessage(acceptRegulationMessageInput: AcceptRegulationMessageInput): CheckList | Promise<CheckList>;
    submitChecklistValueEffort(submitChecklistValueEffortInput: SubmitChecklistValueEffortInput[]): CheckList | Promise<CheckList>;
    createCheckItem(createCheckItemInput: CreateCheckItemInput): Nullable<CheckItem> | Promise<Nullable<CheckItem>>;
    updateCheckItem(updateCheckItemInput: UpdateCheckItemInput): Nullable<CheckItem> | Promise<Nullable<CheckItem>>;
    deleteCheckItem(deleteCheckItemInput: DeleteCheckItemInput): Nullable<CheckItem> | Promise<Nullable<CheckItem>>;
    createCheckItemValue(createCheckItemValueInput: CreateCheckItemValueInput): Nullable<CheckValue> | Promise<Nullable<CheckValue>>;
    createMaintenancePlan(createMaintenanceInput?: Nullable<CreateWorkSpaceMaintenanceMainInput>): Nullable<WorkSpaceMaintenanceMain> | Promise<Nullable<WorkSpaceMaintenanceMain>>;
    addChecksToMaintenanceNodes(addChecksToMaintenanceNodesInput?: Nullable<AddChecksToMaintenanceNodesInput>): Nullable<Message> | Promise<Nullable<Message>>;
    setWorkSafetyRegulation(setWorkSafetyRegulationInput?: Nullable<SetWorkSafetyRegulationInput>): Nullable<Message> | Promise<Nullable<Message>>;
    setCheckListValuesStatus(setCheckListValueInput?: Nullable<SetCheckListValueInput>): Nullable<Message> | Promise<Nullable<Message>>;
    uploadFile(fileUploadMetaInput?: Nullable<FileUploadMetaInput>, files?: Nullable<Upload[]>): Nullable<Message> | Promise<Nullable<Message>>;
    rollbackMaintenancePlanCreation(WorkSpaceMaintenanceMainId?: Nullable<number>): Nullable<Message> | Promise<Nullable<Message>>;
    cancelMaintenancePlans(MaintenanceMainIds?: Nullable<Nullable<number>[]>): Nullable<Message> | Promise<Nullable<Message>>;
    rescheduleMaintenancePlan(MaintenanceMainId?: Nullable<number>): Nullable<Message> | Promise<Nullable<Message>>;
    updateMaintenancePlan(updateMaintenancePlanInput?: Nullable<UpdateMaintenancePlanInput>): Nullable<Message> | Promise<Nullable<Message>>;
    createRegulation(createRegulationInput: CreateRegulationInput): Nullable<Regulation> | Promise<Nullable<Regulation>>;
    updateRegulation(updateRegulationInput: UpdateRegulationInput): Nullable<Regulation> | Promise<Nullable<Regulation>>;
    deleteRegulation(deleteRegulationInput: DeleteRegulationInput): Nullable<Regulation> | Promise<Nullable<Regulation>>;
    createScheduler(createSchedulerInput?: Nullable<CreateSchedulerInput>): Nullable<Scheduler> | Promise<Nullable<Scheduler>>;
    cancelATaskScheduler(schedulerId?: Nullable<number>): Nullable<Message> | Promise<Nullable<Message>>;
    cancelASupportTaskScheduler(schedulerId?: Nullable<number>): Nullable<Message> | Promise<Nullable<Message>>;
    rescheduleMaintenanceTask(rescheduleMaintenanceTaskInputs?: Nullable<RescheduleMaintenanceTaskInputs>): Nullable<Message> | Promise<Nullable<Message>>;
    rescheduleSupportTask(rescheduleSupportTaskInputs?: Nullable<RescheduleSupportTaskInputs>): Nullable<Message> | Promise<Nullable<Message>>;
    createSla(createSlaInput: CreateSlaInput): Nullable<Sla> | Promise<Nullable<Sla>>;
    createSubSla(createSubSlaInput: Nullable<CreateSubSlaInput>[]): Nullable<Nullable<SubSla>[]> | Promise<Nullable<Nullable<SubSla>[]>>;
    updateSla(updateSlaInput: UpdateSlaInput): Nullable<Sla> | Promise<Nullable<Sla>>;
    updateSubSla(updateSubSlaInput: Nullable<UpdateSubSlaInput>[]): Nullable<Nullable<SubSla>[]> | Promise<Nullable<Nullable<SubSla>[]>>;
    createSlaCalendar(createSlaCalendarInput: CreateSlaCalendarInput): SlaCalendar | Promise<SlaCalendar>;
    addWorkingHours(addWorkingHoursInput: WorkingHoursInput): Nullable<Day> | Promise<Nullable<Day>>;
    createSupportPlan(createSupportInput?: Nullable<CreateWorkSpaceSupportMainInput>): Nullable<WorkSpaceSupportMain> | Promise<Nullable<WorkSpaceSupportMain>>;
    addChecksToSupportNodes(addChecksToSupportNodesInput?: Nullable<AddChecksToSupportNodesInput>): Nullable<Message> | Promise<Nullable<Message>>;
    updateSupportPrewiewSchedule(updateSupportPrewiewScheduleInput?: Nullable<UpdateSupportPrewiewScheduleInput>): Nullable<SupportPreview> | Promise<Nullable<SupportPreview>>;
    rollbackSupportPlanCreation(WorkSpaceSupportMainId?: Nullable<number>): Nullable<Message> | Promise<Nullable<Message>>;
    cancelSupportPlans(supportMainIds?: Nullable<Nullable<number>[]>): Nullable<Message> | Promise<Nullable<Message>>;
    rescheduleSupportPlan(SupportMainId?: Nullable<number>): Nullable<Message> | Promise<Nullable<Message>>;
    addNodeToTask(addNodeToTaskInput: Nullable<AddNodeToTaskInput>[]): Nullable<string> | Promise<Nullable<string>>;
    deleteNodeFromTask(deleteNodeFromTaskInput: Nullable<DeleteNodeFromTaskInput>[]): Nullable<ResponseObject> | Promise<Nullable<ResponseObject>>;
    create(createTaskInput: JSON): Nullable<FaultTask>[] | Promise<Nullable<FaultTask>[]>;
    createWorkFlow(createWorkFlowInput: CreateWorkFlowInput): Nullable<WorkFlow> | Promise<Nullable<WorkFlow>>;
    updateOneWorkspaceWorkFlow(updateWorkFlowInput: UpdateWorkFlowInput): Nullable<WorkFlow> | Promise<Nullable<WorkFlow>>;
}

export interface CheckList {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    properties?: Nullable<CheckListProperties>;
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    className?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    isActive?: Nullable<boolean>;
    versionNo?: Nullable<string>;
    validityStatus?: Nullable<DateTime>;
    isDeleted?: Nullable<boolean>;
    estimatedTime?: Nullable<string>;
    timeType?: Nullable<string>;
    key?: Nullable<string>;
    CheckListValues: CheckListValue[];
    checkListType: CheckListType[];
    name: string;
    tag: Nullable<string>[];
    scheduler: Schedule[];
    updatedAt?: Nullable<DateTime>;
    includesOfCheckItems: CheckItem[];
    hasRegulations: Regulation[];
}

export interface CheckListProperties {
    description?: Nullable<string>;
    className?: Nullable<string>;
    externalNode?: Nullable<boolean>;
    isActive?: Nullable<boolean>;
    trId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    isDeleted?: Nullable<boolean>;
    canDelete?: Nullable<boolean>;
    id?: Nullable<string>;
    tag?: Nullable<Nullable<string>[]>;
    key?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    canDisplay?: Nullable<boolean>;
    name?: Nullable<string>;
    estimatedTime?: Nullable<string>;
    timeType?: Nullable<string>;
    versionNo?: Nullable<string>;
    validityStatus?: Nullable<DateTime>;
}

export interface CheckItem {
    id?: Nullable<number>;
    labels: string[];
    properties?: Nullable<CheckItemProperties>;
    canDelete: boolean;
    canDisplay: boolean;
    checkItemsParentOf: CheckItemsMain[];
    includesOfCheckList: CheckList[];
    className: string;
    createdAt: DateTime;
    description: string;
    documentRequired?: Nullable<boolean>;
    isRequired?: Nullable<boolean>;
    inputType?: Nullable<string>;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    name: string;
    photoRequired?: Nullable<boolean>;
    tag: Nullable<string>[];
    updatedAt?: Nullable<DateTime>;
    CheckItemValue: CheckItemValue[];
}

export interface CheckItemProperties {
    id?: Nullable<number>;
    key?: Nullable<string>;
    labels?: Nullable<Nullable<string>[]>;
    name?: Nullable<string>;
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    className?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    documentRequired?: Nullable<boolean>;
    isRequired?: Nullable<boolean>;
    inputType?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    photoRequired?: Nullable<boolean>;
    tag?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
    externalNode?: Nullable<boolean>;
    trId?: Nullable<string>;
}

export interface CheckValue {
    id?: Nullable<number>;
    name?: Nullable<string>;
    isActive?: Nullable<boolean>;
    trId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    isDeleted?: Nullable<boolean>;
    canDelete?: Nullable<boolean>;
    tag?: Nullable<Nullable<string>[]>;
    key?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    canDisplay?: Nullable<boolean>;
    inputValue?: Nullable<JSON>;
    labels?: Nullable<Nullable<string>[]>;
}

export interface IQuery {
    getRequestTypeWithTaskCount(): Nullable<RequestType> | Promise<Nullable<RequestType>>;
    evaluateSchedulerOccurrenceDates(createSchedulerInput?: Nullable<CreateSchedulerInput>): Nullable<Nullable<DateTime>[]> | Promise<Nullable<Nullable<DateTime>[]>>;
    getSlaList(): Nullable<Nullable<Sla>[]> | Promise<Nullable<Nullable<Sla>[]>>;
    getTasksAndStatesWhichAssignedToUserPagination(options?: Nullable<TaskOptionProperties>, workSpaceId?: Nullable<string>): Nullable<Nullable<TaskMainType>[]> | Promise<Nullable<Nullable<TaskMainType>[]>>;
    getTasksAndStatesCanBeApproveByCurrentUserPagination(options?: Nullable<TaskOptionProperties>, workSpaceId?: Nullable<string>): Nullable<Nullable<TaskMainType>[]> | Promise<Nullable<Nullable<TaskMainType>[]>>;
    getTasksByRequestType(options?: Nullable<TaskOptionProperties>, requestTypeId?: Nullable<string>, workSpaceId?: Nullable<string>): Nullable<Nullable<TaskMainType>[]> | Promise<Nullable<Nullable<TaskMainType>[]>>;
    getEffortsByTaskId(taskId?: Nullable<string>): Nullable<Nullable<EffortMainType>[]> | Promise<Nullable<Nullable<EffortMainType>[]>>;
    getSparesByTaskId(taskId?: Nullable<string>): Nullable<Nullable<SpareMainType>[]> | Promise<Nullable<Nullable<SpareMainType>[]>>;
    getTaskTypeProperties(typeCode: string): Nullable<TaskTypeMain> | Promise<Nullable<TaskTypeMain>>;
    workFlows(): Nullable<Nullable<WorkFlow>[]> | Promise<Nullable<Nullable<WorkFlow>[]>>;
    getUser(): Nullable<UserVirtualWorkSpace> | Promise<Nullable<UserVirtualWorkSpace>>;
}

export interface RequestType {
    id: number;
    name: string;
    taskCount: number;
    children?: Nullable<Nullable<RequestType>[]>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: RequestTypeEn[];
    parentOfTr: RequestTypeTr[];
}

export interface CheckListType {
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    code?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    language?: Nullable<string>;
    name?: Nullable<string>;
    owner?: Nullable<string>;
    trId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    realm?: Nullable<string>;
}

export interface Regulation {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    checkListsHas: CheckList[];
    CheckListValue: CheckItemValue[];
    className?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    tag?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
    properties?: Nullable<RegulationProperties>;
}

export interface ChecklistValueScope {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    isDeleted: boolean;
    name: string;
    MaintenanceTask: Maintenance[];
    SupportTask: Support[];
    ScopeItem: ChecklistValueScope[];
}

export interface Technician {
    referenceId: string;
    referenceLabel: Nullable<string>[];
    url: string;
    urlType: string;
    userOriginal?: Nullable<JSON>;
}

export interface Effort {
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    effortDuration?: Nullable<string>;
    effortOfUsers: UserVirtualWorkSpace[];
    effortType?: Nullable<string>;
    endDate?: Nullable<DateTime>;
    ScopeMaintenanceEffort: CheckListValue[];
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    owner?: Nullable<string>;
    startDate?: Nullable<DateTime>;
    trId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export interface Component {
    id?: Nullable<number>;
    referenceId?: Nullable<number>;
    canDelete?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    referenceLabel?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
    urlType?: Nullable<string>;
}

export interface System {
    id?: Nullable<number>;
    referenceId?: Nullable<string>;
    canDelete?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    referenceLabel?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
    urlType?: Nullable<string>;
}

export interface FacilityStructure {
    id?: Nullable<number>;
    referenceId?: Nullable<string>;
    canDelete?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    referenceLabel?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
    url?: Nullable<string>;
    urlType?: Nullable<string>;
}

export interface CheckListValue {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    isDeleted: boolean;
    createdAt?: Nullable<DateTime>;
    name: string;
    key?: Nullable<string>;
    Effort: Effort[];
    CheckList: CheckList[];
    MaintenanceTask: Maintenance[];
    SupportTask: Support[];
    ScopeItem: ChecklistValueScope[];
    Status: CheckListValueStatusNode[];
    Regulation: Regulation[];
    Component: Component[];
    System: System[];
    FacilityStructure: FacilityStructure[];
    Technician: Technician[];
    CheckItemValue: CheckItemValue[];
    Image: Image[];
    Document: Document[];
}

export interface Image {
    id?: Nullable<number>;
    labels: string[];
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    createdAtDate?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    owner?: Nullable<string>;
    trId: string;
    updatedAt: DateTime;
    updatedAtDate: string;
    url: string;
}

export interface Document {
    id?: Nullable<number>;
    labels: string[];
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    createdAtDate?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    owner?: Nullable<string>;
    trId: string;
    updatedAt: DateTime;
    updatedAtDate: string;
    url: string;
}

export interface CheckListValueStatusMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    language?: Nullable<string>;
    name?: Nullable<string>;
    code?: Nullable<string>;
    Statuses: CheckListValueStatusNode[];
}

export interface CheckListValueStatusNode {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    language?: Nullable<string>;
    name?: Nullable<string>;
    code?: Nullable<string>;
    CheckListValue: CheckListValue[];
}

export interface WorkOrderRoot {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    name: string;
    owner: string;
    parentOfClassifications: Classification[];
    parentOfCronJobs: CronJobMain[];
    parentOfDecisionModelNotations: DecisionModelNotationMain[];
    parentOfFeatures: FeatureMain[];
    parentOfProjectTypes: ProjectTypeMain[];
    parentOfTaskTypes: TaskTypeMain[];
    parentOfWorkFlows: WorkFlowMain[];
    parentOfWorkSpaces: WorkSpaceMain[];
    realm: string;
    tag: Nullable<string>[];
    updatedAt: DateTime;
}

export interface Classification {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    createdBy?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted: boolean;
    key?: Nullable<string>;
    name: string;
    owner?: Nullable<string>;
    realm: string;
    rootsParentOf: WorkOrderRoot[];
    tag?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
}

export interface CronJobMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied?: Nullable<boolean>;
    canDelete: boolean;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    createdBy?: Nullable<string>;
    isActive: boolean;
    isDeleted: boolean;
    isRoot?: Nullable<boolean>;
    key?: Nullable<string>;
    name: string;
    owner?: Nullable<string>;
    realm?: Nullable<string>;
    rootsParentOf: WorkOrderRoot[];
    tag?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
}

export interface DecisionModelNotationMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied?: Nullable<boolean>;
    canDelete: boolean;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    createdBy?: Nullable<string>;
    isActive: boolean;
    isDeleted: boolean;
    isRoot?: Nullable<boolean>;
    key?: Nullable<string>;
    name: string;
    owner?: Nullable<string>;
    realm: string;
    rootsParentOf: WorkOrderRoot[];
    tag?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
}

export interface MaintenanceMainNode {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    isDeleted: boolean;
    key: string;
    realm: string;
    name?: Nullable<string>;
    rootsParentOf: WorkOrderRoot[];
    MaintenanceMain: MaintenanceMain[];
}

export interface WorkFlowMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    createdBy?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted: boolean;
    key?: Nullable<string>;
    name: string;
    owner?: Nullable<string>;
    parentOfWorkFlows: WorkFlow[];
    realm?: Nullable<string>;
    rootsParentOf: WorkOrderRoot[];
    tag?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
}

export interface WorkFlow {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    code?: Nullable<string>;
    name?: Nullable<string>;
    language?: Nullable<string>;
    nodeMainProperties?: Nullable<NodeMainProperties>;
    workFlowProperties?: Nullable<WorkFlowProperties>;
}

export interface WorkSpaceMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    createdAt: DateTime;
    createdBy: string;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    name: string;
    owner?: Nullable<string>;
    realm: string;
    rootsParentOf: WorkOrderRoot[];
    parentOfWorkSpaces: WorkSpace[];
    tag?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
}

export interface TaskTypeMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    name?: Nullable<string>;
    canDelete?: Nullable<boolean>;
    realm?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    rootsParentOf: WorkOrderRoot[];
    childs: TaskTypeLang[];
}

export interface FeatureMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    createdBy?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted: boolean;
    key?: Nullable<string>;
    name: string;
    owner?: Nullable<string>;
    realm: string;
    rootsParentOf: WorkOrderRoot[];
    tag?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
}

export interface RegulationMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    createdBy?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted: boolean;
    key?: Nullable<string>;
    name: string;
    owner?: Nullable<string>;
    realm: string;
    rootsParentOf: WorkOrderRoot[];
    tag?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
}

export interface CheckListMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    isDeleted: boolean;
    name: string;
    rootsParentOf: WorkOrderRoot[];
    parentOfCheckList: CheckList[];
    realm: string;
}

export interface CheckItemsMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    isDeleted: boolean;
    name: string;
    rootsParentOf: WorkOrderRoot[];
    CheckItems: CheckItem[];
    realm: string;
}

export interface SchedulesNodes {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    isDeleted?: Nullable<boolean>;
    realm?: Nullable<string>;
    rootsParentOf: WorkOrderRoot[];
}

export interface UserMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    createdBy?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted: boolean;
    key?: Nullable<string>;
    name: string;
    owner?: Nullable<string>;
    parentOfUsers: UserVirtualWorkSpace[];
    realm: string;
    rootsParentOf: WorkOrderRoot[];
    tag?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
}

export interface LanguageMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    isActive?: Nullable<boolean>;
    isDeleted: boolean;
    key?: Nullable<string>;
    name: string;
    realm: string;
    rootsParentOf: WorkOrderRoot[];
}

export interface ProjectTypeMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    createdBy?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted: boolean;
    key?: Nullable<string>;
    name: string;
    owner?: Nullable<string>;
    realm: string;
    tag?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
    rootsParentOf: WorkOrderRoot[];
    projectTypesEnsParentOf: ProjectTypesEn[];
    projectTypesTrsParentOf: ProjectTypesTr[];
}

export interface ProjectTypesEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key?: Nullable<string>;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: ProjectTypeMain[];
    parentOfProjectTypes: ProjectType[];
}

export interface ProjectTypesTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key?: Nullable<string>;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: ProjectTypeMain[];
    parentOfProjectTypes: ProjectType[];
}

export interface ProjectType {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    isActive: boolean;
    isDeleted: boolean;
    key?: Nullable<string>;
    language: string;
    name: string;
    projectTypesEnsParentOf: ProjectTypesEn[];
    projectTypesTrsParentOf: ProjectTypesTr[];
}

export interface SlaMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    name: string;
    owner?: Nullable<string>;
    parentOfSlas: Sla[];
    realm: string;
    rootsParentOf: WorkOrderRoot[];
    tag?: Nullable<Nullable<string>[]>;
    updatedAt: DateTime;
}

export interface CheckItemValue {
    key?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    isActive?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    canDelete?: Nullable<boolean>;
    inputValue?: Nullable<JSON>;
    inputValueParsed?: Nullable<JSON>;
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    name?: Nullable<string>;
    tag?: Nullable<Nullable<string>[]>;
    CheckListValue: CheckListValue[];
    CheckItem: CheckItem[];
    Image: Image[];
    Document: Document[];
}

export interface ChangeReason {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: ChangeReasonEn[];
    parentOfTr: ChangeReasonTr[];
}

export interface ChangeReasonEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: ChangeReason[];
}

export interface ChangeReasonTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: ChangeReason[];
}

export interface ChangeRisk {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: ChangeReasonEn[];
    parentOfTr: ChangeReasonTr[];
}

export interface ChangeRiskEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: ChangeRisk[];
}

export interface ChangeRiskTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: ChangeRisk[];
}

export interface ChangeType {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: ChangeTypeEn[];
    parentOfTr: ChangeTypeTr[];
}

export interface ChangeTypeEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: ChangeType[];
}

export interface ChangeTypeTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: ChangeType[];
}

export interface ChannelSource {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: ChannelSourceEn[];
    parentOfTr: ChannelSourceTr[];
}

export interface ChannelSourceEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: ChannelSource[];
}

export interface ChannelSourceTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: ChannelSource[];
}

export interface Hardware {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: HardwareEn[];
    parentOfTr: HardwareTr[];
}

export interface HardwareEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: Hardware[];
}

export interface HardwareTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: Hardware[];
}

export interface Impact {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: ImpactEn[];
    parentOfTr: ImpactTr[];
}

export interface ImpactEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: Impact[];
}

export interface ImpactTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: Impact[];
}

export interface InvestigationReason {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: InvestigationReasonEn[];
    parentOfTr: InvestigationReasonTr[];
}

export interface InvestigationReasonEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: InvestigationReason[];
}

export interface InvestigationReasonTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: InvestigationReason[];
}

export interface Priority {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: PriorityEn[];
    parentOfTr: PriorityTr[];
    label?: Nullable<Nullable<string>[]>;
}

export interface PriorityEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: InvestigationReason[];
}

export interface PriorityTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: InvestigationReason[];
}

export interface RequestTypeEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: RequestType[];
}

export interface RequestTypeTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: RequestType[];
}

export interface RequestedSubjectType {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: RequestedSubjectTypeEn[];
    parentOfTr: RequestedSubjectTypeTr[];
}

export interface RequestedSubjectTypeEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: RequestedSubjectType[];
}

export interface RequestedSubjectTypeTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: RequestedSubjectType[];
}

export interface ServiceDeskTeam {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: ServiceDeskTeamEn[];
    parentOfTr: ServiceDeskTeamTr[];
}

export interface ServiceDeskTeamEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: ServiceDeskTeam[];
}

export interface ServiceDeskTeamTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: ServiceDeskTeam[];
}

export interface Software {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: SoftwareEn[];
    parentOfTr: SoftwareTr[];
}

export interface SoftwareEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: Software[];
}

export interface SoftwareTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: Software[];
}

export interface TaskClass {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: TaskClassEn[];
    parentOfTr: TaskClassTr[];
}

export interface TaskClassEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: TaskClass[];
}

export interface TaskClassTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: TaskClass[];
}

export interface TaskExecutionType {
    canDelete: boolean;
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: TaskExecutionTypeEn[];
    parentOfTr: TaskExecutionTypeTr[];
}

export interface TaskExecutionTypeEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: TaskExecutionType[];
}

export interface TaskExecutionTypeTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: TaskExecutionType[];
}

export interface WoCategory {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: WoCategoryEn[];
    parentOfTr: WoCategoryTr[];
}

export interface WoCategoryEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: WoCategory[];
}

export interface WoCategoryTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: WoCategory[];
}

export interface WorkSpaceType {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    isActive: boolean;
    isDeleted: boolean;
    key?: Nullable<string>;
    language: string;
    name: string;
    workSpaceTypesEnsParentOf: WorkSpaceTypesEn[];
    workSpaceTypesTrsParentOf: WorkSpaceTypesTr[];
}

export interface WorkSpaceTypesEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key?: Nullable<string>;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    parentOfWorkSpaceTypes: WorkSpaceType[];
}

export interface WorkSpaceTypesTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key?: Nullable<string>;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    parentOfWorkSpaceTypes: WorkSpaceType[];
}

export interface MaintenanceMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    scopeType?: Nullable<string>;
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    owner?: Nullable<string>;
    trId: string;
    updatedAt?: Nullable<DateTime>;
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    Components: ComponentsMain[];
    FacilityStructures: FacilityStructuresMain[];
    Systems: SystemsMain[];
    tags?: Nullable<Nullable<string>[]>;
    prioritiy: MaintenancePrioritiy[];
    MaintenanceType: MaintenanceType[];
    WorkSpaceMaintenanceMains: WorkSpaceMaintenanceMain[];
    Status: MaintenanceMainStatus[];
    Tasks: Maintenance[];
    trid?: Nullable<string>;
}

export interface MaintenancePrioritiy {
    id?: Nullable<number>;
    labels: string[];
    isDeleted?: Nullable<boolean>;
    code?: Nullable<string>;
    realm?: Nullable<string>;
    name?: Nullable<string>;
    language?: Nullable<string>;
    MaintenancePlan: MaintenanceMain[];
    SupportPlan: SupportMain[];
}

export interface MaintenanceType {
    id?: Nullable<number>;
    labels: string[];
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    language?: Nullable<string>;
    owner?: Nullable<string>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    code?: Nullable<string>;
    trId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
}

export interface MaintenanceMainStatusMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    name?: Nullable<string>;
    realm?: Nullable<string>;
    parentOfStatuses: MaintenanceMainStatusMain[];
    Statuses: MaintenanceMainStatus[];
}

export interface MaintenanceMainStatus {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    language?: Nullable<string>;
    name?: Nullable<string>;
    code?: Nullable<string>;
    MaintenancePlan: MaintenanceMain[];
}

export interface WorkSpaceMaintenanceMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    maintenancePeriodUnit?: Nullable<string>;
    maintenancePeriodValue?: Nullable<number>;
    name?: Nullable<string>;
    owner?: Nullable<string>;
    totalEstimatedTimeUnit?: Nullable<string>;
    totalEstimatedTimeValue?: Nullable<number>;
    trId?: Nullable<string>;
    workFlows: WorkSpaceWorkFlow[];
    workSpaces: WorkSpace[];
    updatedAt?: Nullable<DateTime>;
    preveiws: MaintenancePreview[];
    previewScheduler: Schedule[];
    maintenanceMains: MaintenanceMain[];
    createdbyUsers: UserVirtualWorkSpace[];
    description?: Nullable<string>;
    endDate?: Nullable<DateTime>;
    startDate?: Nullable<DateTime>;
    trid?: Nullable<string>;
}

export interface MaintenancePreview {
    id?: Nullable<number>;
    labels: string[];
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    taskStartDate?: Nullable<DateTime>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    owner: string;
    trId: string;
    updatedAt?: Nullable<DateTime>;
    WorkSpaceMaintenanceMain: WorkSpaceMaintenanceMain[];
    TaskScheduler: Schedule[];
    description?: Nullable<string>;
    endDate?: Nullable<DateTime>;
    startDate?: Nullable<DateTime>;
    trid?: Nullable<string>;
}

export interface Maintenance {
    id?: Nullable<number>;
    labels: string[];
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    owner?: Nullable<string>;
    trId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    ScheduledBy: Schedule[];
    preveiw: MaintenancePreview[];
    MaintenancePlan: MaintenanceMain[];
    name?: Nullable<string>;
    endDate?: Nullable<DateTime>;
    startDate?: Nullable<DateTime>;
    trid?: Nullable<string>;
}

export interface Schedule {
    id?: Nullable<number>;
    isDeleted: boolean;
    targetId: number;
    trId?: Nullable<string>;
    targetLabels?: Nullable<Nullable<string>[]>;
    schedulerHandlerKey: string;
    oneTimeOccurrenceDateTime?: Nullable<LocalDateTime>;
    planStartDate?: Nullable<DateTime>;
    labels: string[];
    preview: MaintenancePreview[];
    plan: WorkSpaceMaintenanceMain[];
    supportPreview: SupportPreview[];
    supportPlan: WorkSpaceSupportMain[];
    parentSchedule: Schedule[];
    subSchedule: Schedule[];
}

export interface Sla {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    owner?: Nullable<string>;
    key: string;
    isActive: boolean;
    isDeleted: boolean;
    canDisplay: boolean;
    canDelete: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
    trId: string;
    createdBy: UserVirtualWorkSpace[];
    parentOfWorkFlow: WorkSpaceWorkFlow[];
    subSla: SubSla[];
    blockStates: WorkSpaceWorkFlowState[];
    name: string;
    description?: Nullable<string>;
    tag?: Nullable<string[]>;
    canExtendTime: boolean;
    slaApprover: UserGroupVirtualWorkSpace[];
    parentOfSla: SlaMain[];
}

export interface SubSla {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    owner?: Nullable<string>;
    key: string;
    isActive: boolean;
    isDeleted: boolean;
    canDisplay: boolean;
    canDelete: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
    trId: string;
    createdBy: UserVirtualWorkSpace[];
    parentOfSla: Sla[];
    calendarOfSubSla: SlaCalendar[];
    name: string;
    description?: Nullable<string>;
    tag?: Nullable<string[]>;
    startState: WorkSpaceWorkFlowState[];
    endState: WorkSpaceWorkFlowState[];
    time: string;
}

export interface SlaCalendar {
    id?: Nullable<number>;
    key?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    canDelete?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    tag?: Nullable<string[]>;
    childOfSlaCalendarMain: SlaCalendarMain[];
    parentOfDay: Day[];
}

export interface SlaCalendarMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    owner?: Nullable<string>;
    key?: Nullable<string>;
    realm?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    canDelete?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    trId?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    tag?: Nullable<string[]>;
    parentOfSlaCalendar: SlaCalendar[];
}

export interface WeekdayMain {
    id?: Nullable<number>;
    canDelete?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    name?: Nullable<string>;
    code?: Nullable<string>;
    realm?: Nullable<string>;
    canCopied?: Nullable<boolean>;
    isRoot?: Nullable<boolean>;
    isActive?: Nullable<boolean>;
    default?: Nullable<boolean>;
    parentOfWeekday_en: WeekdayMain_en[];
}

export interface WeekdayMain_en {
    id?: Nullable<number>;
    canDelete?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    name?: Nullable<string>;
    code?: Nullable<string>;
    realm?: Nullable<string>;
    canCopied?: Nullable<boolean>;
    isRoot?: Nullable<boolean>;
    isActive?: Nullable<boolean>;
    default?: Nullable<boolean>;
    childOfWeekdayMain: WeekdayMain[];
    parentOfDay: Day[];
}

export interface Day {
    id?: Nullable<number>;
    canCopied?: Nullable<boolean>;
    canDelete?: Nullable<boolean>;
    code?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    name?: Nullable<string>;
    childOfWeekday: WeekdayMain[];
    childOfSlaCalendar: SlaCalendar[];
    parentOfWorkingHour: WorkingHours[];
}

export interface WorkingHours {
    startTime?: Nullable<DateTime>;
    endTime?: Nullable<DateTime>;
    childOfDay: Day[];
}

export interface Support {
    id?: Nullable<number>;
    labels: string[];
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    owner?: Nullable<string>;
    trId?: Nullable<string>;
    updatedAt?: Nullable<string>;
    createdbyUsers: UserVirtualWorkSpace[];
    requestedbyUsers: UserVirtualWorkSpace[];
    currentStateStates: WorkSpaceWorkFlowState[];
    defaultStateStates: WorkSpaceWorkFlowState[];
    wocategoryWoCategories: WoCategory[];
    preveiw: SupportPreview[];
    ScheduledBy: Schedule[];
    SupportPlan: SupportMain[];
    CheckListValue: CheckListValue[];
    name?: Nullable<string>;
    endDate?: Nullable<string>;
    startDate?: Nullable<string>;
    trid?: Nullable<string>;
}

export interface SupportMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete?: Nullable<boolean>;
    scopeType?: Nullable<string>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    owner?: Nullable<string>;
    trId: string;
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    tags?: Nullable<Nullable<string>[]>;
    updatedAt: string;
    WorkSpaceSupportMains: WorkSpaceSupportMain[];
    Components: ComponentsMain[];
    FacilityStructures: FacilityStructuresMain[];
    Systems: SystemsMain[];
    SupportType: SupportType[];
    prioritiy: MaintenancePrioritiy[];
    createdbyUsers: UserVirtualWorkSpace[];
    Status: SupportMainStatus[];
    Tasks: Support[];
    trid?: Nullable<string>;
}

export interface WorkSpaceSupportMain {
    id?: Nullable<number>;
    labels: string[];
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    owner?: Nullable<string>;
    trId?: Nullable<string>;
    updatedAt?: Nullable<string>;
    workFlows: WorkSpaceWorkFlow[];
    workSpaces: WorkSpace[];
    preveiws: SupportPreview[];
    previewScheduler: Schedule[];
    supportMains: SupportMain[];
    documents: Document[];
    images: Image[];
    createdbyUsers: UserVirtualWorkSpace[];
    description?: Nullable<string>;
    endDate?: Nullable<string>;
    startDate?: Nullable<string>;
    trid?: Nullable<string>;
}

export interface SupportType {
    id?: Nullable<number>;
    labels: string[];
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    language?: Nullable<string>;
    owner?: Nullable<string>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    code?: Nullable<string>;
    trId?: Nullable<string>;
    updatedAt?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
}

export interface SupportPriority {
    id?: Nullable<number>;
    labels: string[];
    isDeleted?: Nullable<boolean>;
    realm?: Nullable<string>;
    name?: Nullable<string>;
    language?: Nullable<string>;
    supportPlan: SupportMain[];
}

export interface SupportMainStatus {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    name?: Nullable<string>;
    SupportPlan: SupportMain[];
    language?: Nullable<string>;
    code?: Nullable<string>;
}

export interface SupportFacilityStructures {
    FacilityStructures: FacilityStructure[];
}

export interface MaintenanceComponents {
    hasVirtualRelationComponents: Component[];
}

export interface SupportMainNode {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    isDeleted?: Nullable<boolean>;
    realm?: Nullable<string>;
    SupportMain: SupportMain[];
}

export interface SystemsMain {
    id?: Nullable<number>;
    labels: string[];
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    SupportPlan: SupportMain[];
    willBeAppliedToSystem: System[];
}

export interface SupportMainStatusMain {
    id?: Nullable<number>;
    realm?: Nullable<string>;
    labels?: Nullable<Nullable<string>[]>;
    name?: Nullable<string>;
    parentOfStatuses: SupportMainStatusMain[];
    Statuses: SupportMainStatus[];
}

export interface SupportPreview {
    id?: Nullable<number>;
    labels: string[];
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    taskStartDate?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    owner: string;
    trId: string;
    updatedAt: string;
    WorkSpaceSupportMain: WorkSpaceSupportMain[];
    TaskScheduler: Schedule[];
    description?: Nullable<string>;
    endDate?: Nullable<string>;
    startDate?: Nullable<string>;
    trid?: Nullable<string>;
}

export interface ComponentsMain {
    id?: Nullable<number>;
    labels: string[];
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    owner?: Nullable<string>;
    trId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    willBeAppliedToComponents: Component[];
    SupportPlan: SupportMain[];
}

export interface FacilityStructuresMain {
    id?: Nullable<number>;
    labels: string[];
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    owner?: Nullable<string>;
    trId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    SupportPlan: SupportMain[];
    willBeAppliedToFacilityStructures: FacilityStructure[];
}

export interface SupportWoCategory {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay: boolean;
    code: string;
    createdAt: DateTime;
    isActive: boolean;
    isDeleted: boolean;
    key: string;
    language: string;
    name: string;
    owner: string;
    trId: string;
    updatedAt: DateTime;
    parentOfEn: SupportWoCategoryEn[];
    parentOfTr: SupportWoCategoryTr[];
}

export interface SupportWoCategoryEn {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: SupportWoCategory[];
}

export interface SupportWoCategoryTr {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canCopied: boolean;
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    isRoot: boolean;
    key: string;
    language: string;
    name: string;
    realm: string;
    mainRootsParentOf: Classification[];
    rootsParentOf: SupportWoCategory[];
}

export interface FaultTask {
    id?: Nullable<number>;
    labels?: Nullable<string[]>;
    owner?: Nullable<string>;
    key: string;
    isActive: boolean;
    isDeleted: boolean;
    canDisplay: boolean;
    canDelete: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
    createdAtDate: string;
    updatedAtDate: string;
    trId: string;
    parentWorkSpace: WorkSpace[];
    appointmentDate: DateTime;
    dueDate: DateTime;
    name: string;
    description?: Nullable<string>;
    tag?: Nullable<Nullable<string>[]>;
    parent: WorkSpace[];
    priority: Priority[];
    requestType: RequestType[];
    woCategory: WoCategory[];
    templatedBy: TaskType[];
    dependedOn: WorkFlow[];
    currrentState: State[];
    defaultState: State[];
}

export interface TaskTypeLang {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    name?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    language?: Nullable<string>;
    realm?: Nullable<string>;
    childs: TaskType[];
}

export interface TaskType {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    code?: Nullable<string>;
    name?: Nullable<string>;
    language?: Nullable<string>;
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    createdAtDate?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    owner?: Nullable<string>;
    trId?: Nullable<string>;
    type?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    updatedAtDate?: Nullable<string>;
    workFlowsWorkflowTaskType: WorkSpaceWorkFlow[];
    childs: TaskTypeProperty[];
}

export interface TaskTypeProperty {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    createdAtDate?: Nullable<string>;
    foreignUrl?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    kafkaEvent?: Nullable<string>;
    key?: Nullable<string>;
    language?: Nullable<string>;
    multiLabel?: Nullable<boolean>;
    name?: Nullable<string>;
    owner?: Nullable<string>;
    trId?: Nullable<string>;
    type?: Nullable<string>;
    uniqueRel?: Nullable<boolean>;
    updatedAt?: Nullable<DateTime>;
    updatedAtDate?: Nullable<string>;
    urlType?: Nullable<string>;
    variableName?: Nullable<string>;
    nodePropArray?: Nullable<Nullable<string>[]>;
    relNodeLabel?: Nullable<string>;
    relParentNodeLabel?: Nullable<string>;
    relatedNode?: Nullable<Nullable<string>[]>;
    parent: TaskType[];
}

export interface WorkSpaceWorkFlowMain {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    createdBy?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted: boolean;
    key?: Nullable<string>;
    name: string;
    owner?: Nullable<string>;
    workSpacesParentOf: WorkSpace[];
    parentOfWorkFlows: WorkSpaceWorkFlow[];
    tag?: Nullable<Nullable<string>[]>;
    updatedAt?: Nullable<DateTime>;
}

export interface WorkSpaceWorkFlow {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    key?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    isActive?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    canDelete?: Nullable<boolean>;
    className?: Nullable<string>;
    default?: Nullable<boolean>;
    tag?: Nullable<Nullable<string>[]>;
    name?: Nullable<string>;
    code?: Nullable<string>;
    description?: Nullable<string>;
    parentOfCancelledStates: WorkSpaceWorkFlowCancelledStates[];
    parentOfDeferredStates: WorkSpaceWorkFlowDeferredStates[];
    parentOfDoneStates: WorkSpaceWorkFlowDoneStates[];
    parentOfWorkingStates: WorkSpaceWorkFlowWorkingStates[];
    workFlowsParentOf: WorkSpaceWorkFlowMain[];
    taskType: TaskType[];
}

export interface WorkSpaceWorkFlowState {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    isActive: boolean;
    isDeleted: boolean;
    canDelete: boolean;
    key?: Nullable<string>;
    name: string;
    isDefault: boolean;
    isFinalState?: Nullable<boolean>;
    willAllowedRejectStateStates: WorkSpaceWorkFlowState[];
    statesWillAllowedRejectState: WorkSpaceWorkFlowState[];
    nextStateStates: WorkSpaceWorkFlowState[];
    statesNextState: WorkSpaceWorkFlowState[];
    maintenanceCurrentState: Maintenance[];
    maintenanceDefaultState: Maintenance[];
    supportCurrentState: Support[];
    supportDefaultState: Support[];
    currentState: FaultTask[];
    defaultState: FaultTask[];
    willApproveByUserGroups: UserGroupVirtualWorkSpace[];
    willAssignToUserGroups: UserGroupVirtualWorkSpace[];
    doneStatesParentOf: WorkSpaceWorkFlowDoneStates[];
    workingStatesParentOf: WorkSpaceWorkFlowWorkingStates[];
    deferredStatesParentOf: WorkSpaceWorkFlowDeferredStates[];
    cancelledStatesParentOf: WorkSpaceWorkFlowCancelledStates[];
    statesTaskNextState: WorkSpaceWorkFlowState[];
    taskNextStateStates: WorkSpaceWorkFlowState[];
}

export interface WorkSpaceWorkFlowDoneStates {
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    key?: Nullable<string>;
    name: string;
    parentOfStates: WorkSpaceWorkFlowState[];
    workFlowsParentOf: WorkSpaceWorkFlow[];
}

export interface WorkSpaceWorkFlowDeferredStates {
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    key?: Nullable<string>;
    name: string;
    parentOfStates: WorkSpaceWorkFlowState[];
    workFlowsParentOf: WorkSpaceWorkFlow[];
}

export interface WorkSpaceWorkFlowCancelledStates {
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    key?: Nullable<string>;
    name: string;
    parentOfStates: WorkSpaceWorkFlowState[];
    workFlowsParentOf: WorkSpaceWorkFlow[];
}

export interface WorkSpaceWorkFlowWorkingStates {
    canDelete: boolean;
    isActive: boolean;
    isDeleted: boolean;
    key?: Nullable<string>;
    name: string;
    parentOfStates: WorkSpaceWorkFlowState[];
    workFlowsParentOf: WorkSpaceWorkFlow[];
}

export interface WorkSpace {
    id?: Nullable<number>;
    labels: string[];
    canDelete: boolean;
    canDisplay: boolean;
    classifiedByWorkSpaceType: WorkSpaceType[];
    copiedFromProjectType: ProjectType[];
    createdByUser: UserVirtualWorkSpace[];
    hasMemberUsers: UserVirtualWorkSpace[];
    isDefaultOfUsers: UserVirtualWorkSpace[];
    usingWorkspaceAsUserGroupUserGroups: UserGroupVirtualWorkSpace[];
    workflows: WorkSpaceWorkFlowMain[];
    WorkSpaceMaintenanceMains: WorkSpaceMaintenanceMain[];
    isDeleted: boolean;
    key: string;
    name: string;
    owner: string;
    tag: Nullable<string>[];
    updatedAt: DateTime;
    isActive: boolean;
    isArchived: boolean;
    createdAt: DateTime;
    parentOfWorkSpace: WorkSpaceMain[];
}

export interface UserVirtualWorkSpace {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    createdAt: DateTime;
    isDeleted: boolean;
    key: string;
    name: string;
    referenceId: string;
    referenceLabel: Nullable<string>[];
    updatedAt: DateTime;
    url: string;
    urlType: string;
    type: string;
    userGroupsHasMember: UserGroupVirtualWorkSpace[];
    workSpacesHasMember: WorkSpace[];
    workSpacesIsDefaultOf: WorkSpace[];
    statesAssignedto: WorkSpaceWorkFlowState[];
    userOriginal?: Nullable<JSON>;
    faultsCreatedby: FaultTask[];
    faultsHasVirtualRelation: FaultTask[];
    faultsRequestedby: FaultTask[];
}

export interface UserGroupVirtualWorkSpace {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    canDelete: boolean;
    createdAt: DateTime;
    isDeleted: boolean;
    key: string;
    name: string;
    referenceId: string;
    referenceLabel: Nullable<string>[];
    updatedAt: DateTime;
    url: string;
    urlType: string;
    statesWillApproveBy: WorkSpaceWorkFlowState[];
    statesWillAssignTo: WorkSpaceWorkFlowState[];
    hasMemberUsers: UserVirtualWorkSpace[];
    workSpacesUsingWorkspaceAsUserGroup: WorkSpace[];
}

export interface Folder {
    id?: Nullable<number>;
    labels: string[];
    canDelete: boolean;
    canDisplay: boolean;
    createdAt: DateTime;
    description: string;
    folderType: string;
    isActive: boolean;
    isDeleted: boolean;
    isPublic: boolean;
    key: string;
    name: string;
    owner: string;
    tag: Nullable<string>[];
    updatedAt: DateTime;
    workSpaceParentOf: WorkSpace[];
    projectParentOf: Project[];
    folderParentOf: Folder[];
}

export interface Project {
    id?: Nullable<number>;
    labels: string[];
    canDelete: boolean;
    canDisplay: boolean;
    createdAt: DateTime;
    description: string;
    folderType: string;
    isActive: boolean;
    isDeleted: boolean;
    isPublic: boolean;
    key: string;
    name: string;
    owner: string;
    tag: Nullable<string>[];
    updatedAt: DateTime;
    startDate: DateTime;
    dueDate: DateTime;
    workSpaceParentOf: WorkSpace[];
    projectParentOf: Project[];
    folderParentOf: Folder[];
}

export interface Message {
    status?: Nullable<number>;
    message?: Nullable<string>;
}

export interface RegulationProperties {
    description?: Nullable<string>;
    className?: Nullable<string>;
    externalNode?: Nullable<boolean>;
    isActive?: Nullable<boolean>;
    trId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    isDeleted?: Nullable<boolean>;
    canDelete?: Nullable<boolean>;
    id?: Nullable<string>;
    tag?: Nullable<Nullable<string>[]>;
    key?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    canDisplay?: Nullable<boolean>;
    name?: Nullable<string>;
}

export interface SchedulerProperties {
    uid?: Nullable<string>;
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    foreignUrl?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    key?: Nullable<string>;
    name?: Nullable<string>;
    owner?: Nullable<string>;
    trId?: Nullable<string>;
}

export interface Scheduler {
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    properties?: Nullable<SchedulerProperties>;
}

export interface TaskMainType {
    user?: Nullable<User>;
    userGroup?: Nullable<UserGroup>;
    calendar?: Nullable<Calendar>;
    state?: Nullable<State>;
    task?: Nullable<Task>;
    workspace?: Nullable<Workspace>;
}

export interface User {
    createdAt?: Nullable<DateTime>;
    urlType?: Nullable<string>;
    isDeleted?: Nullable<boolean>;
    name?: Nullable<string>;
    canDelete?: Nullable<boolean>;
    url?: Nullable<string>;
    referenceId?: Nullable<string>;
    key?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    referenceLabel?: Nullable<Nullable<string>[]>;
}

export interface UserGroup {
    createdAt?: Nullable<DateTime>;
    urlType?: Nullable<string>;
    isDeleted?: Nullable<boolean>;
    name?: Nullable<string>;
    canDelete?: Nullable<boolean>;
    url?: Nullable<string>;
    referenceId?: Nullable<string>;
    key?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    referenceLabel?: Nullable<Nullable<string>[]>;
}

export interface TotalCount {
    low?: Nullable<number>;
    high?: Nullable<number>;
}

export interface Calendar {
    start?: Nullable<string>;
    end?: Nullable<string>;
    title?: Nullable<string>;
}

export interface NextStates {
    canDisplay?: Nullable<boolean>;
    description?: Nullable<string>;
    className?: Nullable<string>;
    trId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    isActive?: Nullable<boolean>;
    isDefault?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    isFinalState?: Nullable<boolean>;
    mainStateId?: Nullable<string>;
    name?: Nullable<string>;
    canDelete?: Nullable<boolean>;
    key?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    tag?: Nullable<Nullable<string>[]>;
}

export interface State {
    isDefault?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    name?: Nullable<string>;
    canDelete?: Nullable<boolean>;
    isActive?: Nullable<boolean>;
    key?: Nullable<string>;
    id?: Nullable<number>;
    nextStates?: Nullable<Nullable<NextStates>[]>;
    labels: string[];
    canDisplay?: Nullable<boolean>;
    description?: Nullable<string>;
    className?: Nullable<string>;
    trId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    isFinalState?: Nullable<boolean>;
    mainStateId?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    tag?: Nullable<Nullable<string>[]>;
}

export interface TaskRequestType {
    id?: Nullable<number>;
    name?: Nullable<string>;
    label?: Nullable<Nullable<string>[]>;
}

export interface CreatedBy {
    id?: Nullable<string>;
    name?: Nullable<string>;
    label?: Nullable<Nullable<string>[]>;
}

export interface RequestedSpaces {
    id?: Nullable<string>;
    name?: Nullable<string>;
    label?: Nullable<Nullable<string>[]>;
}

export interface RequestedBy {
    id?: Nullable<string>;
    name?: Nullable<string>;
    label?: Nullable<Nullable<string>[]>;
}

export interface Task {
    owner?: Nullable<string>;
    canDisplay?: Nullable<boolean>;
    dueDate?: Nullable<DateTime>;
    description?: Nullable<string>;
    isActive?: Nullable<boolean>;
    trId?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    isDeleted?: Nullable<boolean>;
    name?: Nullable<string>;
    canDelete?: Nullable<boolean>;
    appointmentDate?: Nullable<DateTime>;
    key?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    id?: Nullable<number>;
    templatedBy?: Nullable<string>;
    user_firstName_lastName?: Nullable<string>;
    user?: Nullable<string>;
    userId?: Nullable<string>;
    priority?: Nullable<Priority>;
    requestType?: Nullable<TaskRequestType>;
    createdBy?: Nullable<CreatedBy>;
    requestedSpaces?: Nullable<RequestedSpaces>;
    requestedBy?: Nullable<RequestedBy>;
    labels?: Nullable<Nullable<string>[]>;
}

export interface Workspace {
    owner?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    canDisplay?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    isArchived?: Nullable<boolean>;
    name?: Nullable<string>;
    canDelete?: Nullable<boolean>;
    isActive?: Nullable<boolean>;
    key?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    id?: Nullable<number>;
    labels?: Nullable<Nullable<string>[]>;
    workflows?: Nullable<Nullable<number>[]>;
    tag?: Nullable<Nullable<string>[]>;
}

export interface EffortMainType {
    id?: Nullable<number>;
    label?: Nullable<Nullable<string>[]>;
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    effortDuration?: Nullable<string>;
    description?: Nullable<string>;
    effortType?: Nullable<string>;
    user?: Nullable<string>;
}

export interface SpareMainType {
    id?: Nullable<string>;
    name?: Nullable<string>;
    amount?: Nullable<string>;
    measurementUnit?: Nullable<string>;
    totalAmount?: Nullable<string>;
    materialUsedDate?: Nullable<DateTime>;
    user?: Nullable<string>;
    label?: Nullable<Nullable<string>[]>;
}

export interface NoteMainType {
    id?: Nullable<string>;
    name?: Nullable<string>;
    taskMainObject?: Nullable<TaskMainObject>;
    noteDate?: Nullable<DateTime>;
    user?: Nullable<string>;
}

export interface DocumentMainType {
    id?: Nullable<string>;
    name?: Nullable<string>;
    taskMainObject?: Nullable<TaskMainObject>;
}

export interface TaskMainObject {
    owner?: Nullable<string>;
    key?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    canDelete?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    trId?: Nullable<string>;
}

export interface ResponseObject {
    success?: Nullable<boolean>;
}

export interface TaskType_tr {
    labels?: Nullable<Nullable<string>[]>;
    name?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    language?: Nullable<string>;
    childs: TaskType[];
}

export interface TaskType_en {
    labels?: Nullable<Nullable<string>[]>;
    name?: Nullable<string>;
    isActive?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    language?: Nullable<string>;
    childs: TaskType[];
}

export interface NodeMainProperties {
    key?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    isActive?: Nullable<boolean>;
    canDisplay?: Nullable<boolean>;
    isDeleted?: Nullable<boolean>;
    canDelete?: Nullable<boolean>;
    tag?: Nullable<Nullable<string>[]>;
    name?: Nullable<string>;
    className?: Nullable<string>;
    default?: Nullable<boolean>;
}

export interface WorkFlowProperties {
    workSpaceId?: Nullable<string>;
    taskTypeCode?: Nullable<string>;
}

export type IntOrString = any;
export type JSON = any;
export type Upload = any;
export type DateTime = any;
export type LocalDateTime = any;
type Nullable<T> = T | null;
