export {
  EditV2,
  Insert,
  Remove,
  SetAttributes,
  SetTextContent,
  isComplex,
  isEditV2,
  isInsert,
  isRemove,
  isSetAttributes,
  isSetTextContent,
} from "@omicronenergy/oscd-api";

export { Edit, Update, isEdit } from "@omicronenergy/oscd-api";

export { handleEdit } from "./handleEdit.js";

export {
  complexEdit,
  edit,
  remove,
  setAttributes,
  setTextContent,
  simpleEdit,
} from "./testHelpers.js";

export { XMLEditor } from "./XMLEditor.js";

export type {
  Commit,
  CommitOptions,
  Transactor,
  TransactedCallback,
} from "@omicronenergy/oscd-api";
