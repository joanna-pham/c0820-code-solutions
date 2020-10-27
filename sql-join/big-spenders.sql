select "c"."firstName" as "firstName",
       "c"."lastName",
       "p"."amount" as "payments"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
  where "p"."amount" > 10.99
  limit 10;
