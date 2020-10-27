select "a"."line1" as "line1",
       "a"."district" as "district",
       "c"."name" as "city.name",
       "countries"."name" as "country"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId")
  join "countries" as "countries" using ("countryId")
