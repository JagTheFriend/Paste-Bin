import { model, Schema } from 'mongoose';
import { Code } from '@interfaces/code.interface';

const codeSchema: Schema = new Schema({
  value: {
    type: String,
    required: true,
  },
});

const codeModel = model<Code>('Code', codeSchema);
export default codeModel;
