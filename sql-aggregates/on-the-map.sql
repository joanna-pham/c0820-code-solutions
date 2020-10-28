select "countryId",
       count("c".*) as "numOfCities"
  from "cities" as "c"
  join "countries" using ("countryId")
  group by "countryId"
