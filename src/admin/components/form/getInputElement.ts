import { Input, Textarea, Checkbox } from "@medusajs/ui";
import FileUploadField from "./FileUploadField";
import SocialFieldArray from "../seo/SocialFieldArray";

type InputElementType = React.ComponentType<any>;

const getInputElement = (type: string): InputElementType => {
  switch (type) {
    case "input":
      return Input;
    case "textarea":
      return Textarea;
    case "checkbox":
      return Checkbox;
    case "file-upload":
      return FileUploadField;
    case "fieldArray":
      return SocialFieldArray;
    default:
      return Input;
  }
};

export default getInputElement;
