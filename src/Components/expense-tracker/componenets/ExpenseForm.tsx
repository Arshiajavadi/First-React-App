import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./Categories";
import { useForm } from "react-hook-form";
import "./ExpenseStyle.css";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "You must enter at least 3 characters" })
    .max(50, { message: "Your description is too long" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <div className="justify-content-center mt-5 mb-5 form-container ">
        <form
          onSubmit={handleSubmit((e) => {
            onSubmit(e), reset();
          })}
          className="p-4 rounded shadow-lg bg-light"
        >
          <div className="mb-3">
            <label htmlFor="description" className="form-label fw-bold">
              Description
            </label>
            <input
              {...register("description")}
              id="description"
              type="text"
              className="form-control"
            />
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label fw-bold">
              Amount
            </label>
            <input
              {...register("amount", { valueAsNumber: true })}
              id="amount"
              type="number"
              className="form-control"
            />
            {errors.amount && (
              <p className="text-danger">{errors.amount.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label fw-bold">
              Category
            </label>
            <select
              {...register("category")}
              id="category"
              className="form-select"
            >
              <option value=""></option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-danger">{errors.category.message}</p>
            )}
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ExpenseForm;
