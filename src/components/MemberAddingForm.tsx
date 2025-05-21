import React from "react";
import ImageInput from "./inputs/ImageInput";
import { Button } from "./ui/button";
import TextInput from "./inputs/TextInput";

const MemberAddingForm = ({
  form,
  member,
  setMembers,
  index,
  removeMember,
  isArray,
}: MemberAddingFormProps) => {
  return (
    <div className="w-full h-fit px-5 py-4 border border-gray-400 rounded-lg">
      <div className="flex flex-col space-y-3">
        <div className="flex justify-between">
          <ImageInput
            isTitle={false}
            fieldName={isArray ? `members.${index}.imageUrl` : "imageUrl"}
            form={form}
            size="sm"
            isMembersState
            setMembers={setMembers}
            isOptional
            memberId={member.id}
          />
          <Button
            type="button"
            onClick={() => removeMember(member.id)}
            variant="destructive"
            size="sm"
            className="bg-rose-400 hover:bg-rose-500 rounded-lg"
          >
            Remove -
          </Button>
        </div>
        <TextInput
          isTitle
          title="Member name"
          form={form}
          placeHolder="Enter member name"
          fieldName={isArray ? `members.${index}.name` : "name"}
          isMembersState
          setMembers={setMembers}
          size="sm"
          memberId={member.id}
        />
        <TextInput
          isTitle
          title="Member email"
          form={form}
          placeHolder="Enter member email"
          fieldName={isArray ? `members.${index}.email` : "email"}
          isMembersState
          setMembers={setMembers}
          size="sm"
          memberId={member.id}
        />
        <TextInput
          isTitle
          title="Member phone number"
          form={form}
          isOptional
          placeHolder="Enter member phone number"
          fieldName={isArray ? `members.${index}.phoneNumber` : "phoneNumber"}
          isMembersState
          setMembers={setMembers}
          size="sm"
          memberId={member.id}
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
              isMembersState
              setMembers={setMembers}
              size="sm"
              memberId={member.id}
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
              isMembersState
              setMembers={setMembers}
              size="sm"
              memberId={member.id}
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
              isMembersState
              setMembers={setMembers}
              size="sm"
              memberId={member.id}
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
              isMembersState
              setMembers={setMembers}
              size="sm"
              memberId={member.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberAddingForm;
