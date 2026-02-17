import {z} from "zod";

export const paymentSchema = z.object({
    city: z.string().nonempty("City is required").min(3, "min 3 characters"),
    details: z.string().nonempty("Address is required").min(3, "min 3 characters"),
    phone: z.string().nonempty("Phone is required").regex(/^01[0125][0-9]{8}$/, "Phone number must be Egyptian phone number and start with 01"),
});

export type PaymentType = z.infer<typeof paymentSchema>;