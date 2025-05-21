import ImageInput from "./inputs/ImageInput";
import TextInput from "./inputs/TextInput";

interface Props {
  isArray: boolean;
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any;
}

export const MemberUpdateForm = ({ isArray, index, form }: Props) => {
  return (
    <div className="w-full h-fit px-5 py-4 border border-gray-400 rounded-lg">
      <div className="flex flex-col space-y-3">
        <ImageInput
          isTitle={false}
          fieldName={isArray ? `members.${index}.imageUrl` : "imageUrl"}
          form={form}
          size="sm"
          isMembersState
          isOptional
        />
        <TextInput
          isTitle
          title="Member name"
          form={form}
          placeHolder="Enter member name"
          fieldName={isArray ? `members.${index}.name` : "name"}
          size="sm"
        />
        <TextInput
          isTitle
          title="Member email"
          form={form}
          placeHolder="Enter member name"
          fieldName={isArray ? `members.${index}.email` : "email"}
          size="sm"
        />
        <TextInput
          isTitle
          title="Member phone number"
          form={form}
          placeHolder="Enter member phone number"
          fieldName={isArray ? `members.${index}.phoneNumber` : "phoneNumber"}
          size="sm"
        />
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <TextInput
              isTitle
              title="Member monthly target"
              form={form}
              placeHolder="Enter member monthly target"
              fieldName={
                isArray ? `members.${index}.monthlyTarget` : "monthlyTarget"
              }
              size="sm"
            />
          </div>
          <div className="max-w-[80px]">
            <TextInput
              isTitle
              title="Currency"
              form={form}
              placeHolder="$"
              fieldName={
                isArray ? `members.${index}.targetCurrency` : "targetCurrency"
              }
              size="sm"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <TextInput
              isTitle
              title="Member monthly salary"
              form={form}
              placeHolder="Enter member monthly salary"
              fieldName={isArray ? `members.${index}.salary` : "salary"}
              size="sm"
            />
          </div>
          <div className="max-w-[80px]">
            <TextInput
              isTitle
              title="Currency"
              form={form}
              placeHolder="$"
              fieldName={
                isArray ? `members.${index}.salaryCurrency` : "salaryCurrency"
              }
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
