import { Input, Text } from "@medusajs/ui";
import { useController, UseControllerProps } from "react-hook-form";
import { clx } from "@medusajs/ui";

type Props = { title?: string; className?: string } & UseControllerProps;

const CustomInput = ({
  control,
  name,
  title,
  rules,
  defaultValue,
  className,
}: Props) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <div
      className={clx("flex flex-col gap-2", {
        [`${className}`]: !!className,
      })}
    >
      {title && (
        <Text>
          {title}
          {rules?.required && <span className="text-red-500">*</span>}
        </Text>
      )}
      <Input {...field} />
      {error && <p className="text-small text-rose-600">{error.message}</p>}
    </div>
  );
};

export default CustomInput;
