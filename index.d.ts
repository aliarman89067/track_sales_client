interface CTASecondaryButtonProps {
  title: string;
  onClick: () => void;
}

interface CTAPrimaryButtonProps {
  title: string;
  onClick: () => void;
  classNames?: string;
}

interface EmptyPaperPlaneCTAProps {
  title: string;
  onClick: () => void;
}

interface BackButtonProps {
  title: string;
  href: string;
}
interface AuthTogglerProps {
  role: "admin" | "agent";
  setRole: (value: "admin" | "agent") => void;
}
interface UserType {
  cognitoId: string;
  imageUrl: string;
  adminName: string;
  agentName: string;
  email: string;
  role: string;
}
interface ImageInputProps {
  form: any;
  title?: string;
  size: "lg" | "sm";
  isTitle: boolean;
  fieldName: string;
  isMembersState?: boolean;
  setMembers?: React.Dispatch<React.SetStateAction<MembersProps[] | null>>;
  isOptional?: boolean;
  memberId?: number;
}
interface TextInputProps {
  form: any;
  title?: string;
  isTitle: boolean;
  fieldName: string;
  placeHolder: string;
  isMembersState?: boolean;
  setMembers?: React.Dispatch<React.SetStateAction<MembersProps[] | null>>;
  size?: "lg" | "sm";
  isOptional?: boolean;
  memberId?: number;
}
interface MembersProps {
  id: number;
  imageUrl?: string;
  name: string;
  email: string;
  phoneNumber?: string;
  monthlyTarget: string;
  salary: string;
  targetCurrency: string;
  salaryCurrency: string;
}
interface MemberAddingFormProps {
  member: MembersProps;
  setMembers: React.Dispatch<React.SetStateAction<MembersProps[] | null>>;
  form: any;
  index: number;
  isArray: boolean;
  removeMember: (id: number) => void;
}
interface OrganizationsProps {
  id: string;
  imageUrl: string;
  organizationName: string;
  organizationKeyword: string;
  members?: {
    id: string;
    imageUrl: string;
    name: string;
    email: string;
    monthlyTarget: number;
    targetCurrency: string;
  }[];
}
interface AddMemberProps {
  params: Promise<{
    organizationId: string;
  }>;
}
interface MembersPageProps {
  params: Promise<{
    organizationId: string;
  }>;
}
interface MembersGrid {
  organizationId: string;
}
interface MemberDetails {
  params: Promise<{
    slug: string[];
  }>;
}
interface MemberDetailsContainerProps {
  memberId: string;
  organizationId: string;
}
interface Sales {
  clientName: string;
  clientEmail: string;
  clientImageUrl: string;
  clientPhoneNumber: string;
  totalPayment: string;
  paidAmount: string;
  remainingAmount: string;
  description?: string;
  createdAt: string;
}

interface prevMonthHistory {
  id: string;
  memberId: string;
  year: number;
  month: string;
  target: string;
  totalSales: string;
  status: "Not_Achieved" | "Achieved";
  sales: Sales[];
}

interface MembersDetailsProps {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  phoneNumber?: string;
  monthlyTarget: number;
  todaySale: number;
  currentSale: number;
  overallSale: number;
  numberOfAccount?: number;
  salary: number;
  targetCurrency: string;
  salaryCurrency: string;
  keyword: string;
  calendarDays: CalendarDaysProps[];
  // calendarDetails CalendarDetails[]
  sales: Sales[];
  createdAt: Date;
  updatedAt: Date;
  previousMonths: prevMonthHistory[];
}

interface CalendarDaysProps {
  id: string;
  date: string;
  day: number;
  status: "SALE" | "NOT_SALE" | "LEAVE" | "HOLIDAY" | "REMAINING_DAY";
  sale?: string;
  leaveReason?: string;
  memberId: string;
}
interface SalesPercentageChartProps {
  currentSale: number;
  monthlyTarget: number;
  isSmall?: boolean;
}
interface AgentSheetProps {
  memberData: MembersDetailsProps;
}
interface AddAgentDataContainerProps {
  memberId: string;
  organizationId: string;
}
interface OrganizationsWithMembersProps {
  id: string;
  imageUrl: string;
  organizationName: string;
  organizationKeyword: string;
  members?: {
    id: string;
    imageUrl: string;
    name: string;
    email: string;
    monthlyTarget: number;
    currentSale: number;
    targetCurrency: string;
    sales: Sales[];
    calendarDays: CalendarDaysProps[];
    createdAt: string;
  }[];
}
interface MembersWithOrganizationProps {
  id: string;
  organization: {
    id: string;
    imageUrl: string;
    organizationName: string;
    organizationKeyword: string;
  };
}
