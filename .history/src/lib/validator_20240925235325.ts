import { z } from "zod"

export const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "Полето за име е задолжително.",
  }),
  lastName: z.string().min(1, {
    message: "Полето за презиме е задолжително.",
  }),
  email: z.string().email({
    message: "Невалидна е-меил адреса.",
  }),
  instagram: z.string().min(1, {
    message: "Полето за инстаграм профилот е задолжителено.",
  }),
  phoneNumber: z
    .string()
    .min(9, { message: "Телефонскиот број мора да има точно 9 цифри." })
    .max(9, { message: "Теелефонскиот број мора да има точно 9 цифри." })
    .regex(/^07\d{0,7}$/, {
      message: "Телефонскиот број мора да започнува со 07 и да содржи максимум 9 цифри.",
    }),
  subject: z.string().min(1, {
    message: "Изборот за предмет е задолжителен.",
  }),
});
