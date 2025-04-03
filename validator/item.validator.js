import Joi from "joi";

const itemValidation = Joi.object({
  name: Joi.string()
    .trim()
    .min(3)
    .max(50)
    .regex(/^[a-zA-Z0-9\s]+$/)
    .required()
    .messages({
      "string.pattern.base": "Name can only contain letters, numbers, and spaces",
      "string.min": "Name must be at least 3 characters",
      "string.max": "Name cannot be more than 50 characters",
      "string.empty": "Name cannot be empty",
      "any.required": "Name is required",
    }),

  quantity: Joi.number()
    .integer()
    .min(0)
    .required()
    .messages({
      "number.base": "Quantity must be a number",
      "number.min": "Quantity cannot be negative",
      "any.required": "Quantity is required",
    }),

  category: Joi.string()
    .trim()
    .min(3)
    .max(30)
    .required()
    .messages({
      "string.min": "Category must be at least 3 characters",
      "string.max": "Category cannot be more than 30 characters",
      "string.empty": "Category cannot be empty",
      "any.required": "Category is required",
    }),

  dateAdded: Joi.date()
    .default(() => new Date())
    .messages({
      "date.base": "Date must be a valid date",
    }),
});

export default itemValidation;
