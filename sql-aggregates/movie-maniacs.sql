select "c"."firstName",
       "c"."lastName",
       sum("p"."amount") as "totalPaid"
  from "payments" as "p"
  join "customers" as "c" using("customerId")
  group by "c"."firstName", "c"."lastName"
  order by "totalPaid" desc
