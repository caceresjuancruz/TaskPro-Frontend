import { Schema, model, models } from 'mongoose'

export interface IComment extends Document {
  taskId: number
  comment: string
  authorId: number
  createdAt: Date
}

const CommentSchema = new Schema({
  taskId: { type: Number, required: true },
  comment: { type: String, required: true },
  authorId: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
})

const Comment = models.Comment || model<IComment>('Comment', CommentSchema)

export default Comment
