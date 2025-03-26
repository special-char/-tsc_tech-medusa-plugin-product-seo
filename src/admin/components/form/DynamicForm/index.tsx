import { Controller, FieldValues, UseFormReturn } from "react-hook-form";
import React, { memo } from "react";
import { Input, Label, clx, Button } from "@medusajs/ui";
import ErrorMessage from "./ErrorMessage";
import getInputElement from "../getInputElement";

type SchemaField = {
  label: string;
  fieldType: string;
  props?: any;
  validation: Record<string, any>;
};

type Props = {
  form: UseFormReturn<FieldValues, any, undefined>;
  onSubmit: (data: FieldValues) => void;
  onReset?: () => void;
  schema: Record<string, SchemaField>;
  onKeyDown?: (event: React.KeyboardEvent) => void;
};
const DynamicForm = ({ form, onSubmit, onReset, schema, onKeyDown }: Props) => {
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-y-3"
      onKeyDown={onKeyDown}
    >
      {Object.entries(schema).map(([key, fields]) => {
        return (
          <Controller
            key={key}
            control={form.control}
            name={key}
            rules={fields.validation}
            render={({ field }) => {
              return (
                <div>
                  <Label htmlFor={key}>
                    <span
                      className={clx("font-medium font-sans block mb-2", {
                        ["sr-only"]: !fields.label,
                      })}
                    >
                      {fields.label || field.name}
                    </span>
                    {React.createElement(
                      getInputElement(fields.fieldType) as typeof Input,
                      {
                        ...fields.props,
                        ...field,
                        value: field.value || null,
                        onChange: field.onChange,
                      }
                    )}
                    <ErrorMessage
                      control={form.control}
                      name={key}
                      rules={fields.validation}
                    />
                  </Label>
                </div>
              );
            }}
          />
        );
      })}
      <div className="flex gap-4 items-center">
        <Button
          type="submit"
          disabled={form.formState.isLoading || form.formState.isSubmitting}
        >
          {form.formState.isLoading || form.formState.isSubmitting
            ? "Submitting..."
            : "Submit"}
        </Button>
        {onReset && (
          <Button
            type="button"
            variant="secondary"
            disabled={form.formState.isLoading || form.formState.isSubmitting}
            onClick={onReset}
          >
            Reset
          </Button>
        )}
      </div>
    </form>
  );
};

export default memo(DynamicForm);
