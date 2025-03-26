import { Textarea, Text } from "@medusajs/ui";
import { useController, UseControllerProps } from "react-hook-form";
import { clx } from "@medusajs/ui";

type Props = { title: string; className?: string } & UseControllerProps;

const CustomTextarea = ({
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
      className={clx("space-y-2", {
        [`${className}`]: !!className,
      })}
    >
      <Text>
        {title} {rules?.required && <span className="text-red-500">*</span>}
      </Text>
      <Textarea {...field} />
      {error && <p className="text-small text-rose-600">{error.message}</p>}
    </div>
  );
};

export default CustomTextarea;
