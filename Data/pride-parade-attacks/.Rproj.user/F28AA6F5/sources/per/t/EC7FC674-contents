library(tidyverse)

# I have a dataset of attacks on queer pride parades in Germany in 2024 that I scraped from the website of a foundation that documents them. 

prideattacks <- readr::read_csv("csd-attacks.csv")

glimpse(prideattacks)

# I want to know in which states most of these attacks happen. 

statecounts <- prideattacks %>%
  dplyr::count(state, sort = TRUE) %>%
  dplyr::mutate(percent = n / sum(n) * 100)

view(statecounts)

# Now I want to know how often the attackers are associated with right-wing extremist organizations.

attackers <- prideattacks %>%
  mutate(description = str_to_lower(description)) %>%
  mutate(attacker = case_when(
    str_detect(description, "rechtsextrem|rechtsextreme|rechtsextremen|rechtsextremer|Neonazi|Neonazis") ~ "extremist",
    .default = "other"
  )) %>%
  group_by(description, attacker) %>%
  summarize(n = n())

view(attackers)

# I also want to see how often the attackers are connected to the right-wing party AfD.(I tried doing this in the same code as above but some results didn't show up because some of the attacks involved both extremists and AfD party members.)

afdconnection <- prideattacks %>%
  mutate(description = str_to_lower(description)) %>%
  mutate(afdconnection = case_when(
    str_detect(description, "afd") ~ "afd",
    .default = "other"
  )) %>%
  group_by(description, afdconnection) %>%
  summarize(n = n())

view(afdconnection)
