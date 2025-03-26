import { Text, clx } from "@medusajs/ui";
import { ReactNode } from "react";

export type SectionRowProps = {
  title: string;
  value?: ReactNode | string | null;
  actions?: ReactNode;
  variant?: "default" | "custom";
};

export const SectionRow = ({
  title,
  value,
  actions,
  variant = "default",
}: SectionRowProps) => {
  const isValueString = typeof value === "string" || !value;

  return (
    <div
      className={clx(
        `text-ui-fg-subtle grid w-full grid-cols-2 items-center gap-4 px-6 py-4`,
        {
          "grid-cols-[1fr_1fr_28px]": !!actions,
        },
        {
          ["grid grid-cols-1"]: variant === "custom",
        }
      )}
    >
      <Text size="small" weight="plus" leading="compact" className="font-bold">
        {title}
      </Text>

      {isValueString ? (
        <Text
          weight="regular"
          size="small"
          leading="compact"
          className={clx(`whitespace-pre-line text-pretty`, {
            ["no-scrollbar h-full max-h-[400px] overflow-y-scroll"]:
              variant === "custom",
          })}
        >
          {value ?? "-"}
        </Text>
      ) : (
        <div className="flex flex-wrap gap-1">{value}</div>
      )}

      {actions && <div>{actions}</div>}
    </div>
  );
};
