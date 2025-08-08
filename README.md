Originally, this was supposed to be a really flashy project that had everything: scraping, QGIS, a scrollytelling map, a graphic that changes after scrolling, something interactive. After I put together all these elements, I realized that I couldn't put all of this into one coherent code - at least not with my skillset. So I decided to simplify it a lot and learn to do an interactive in a little sidequest project.<br>
I got the idea fpr this project after reading several reports about attacks on pride parades in Germany. I knew that violence against queer people had also skyrocketed so I was wondering whether there was data thatt would allow to look at patterns and correlations. Mainly, I wanted to find out how this fit together with political and cultural developments.<br>
For the scrollytelling map of incidents in 2025, I looked at local media reports as they seemed the most reliable to me. Here are the links:
<ul>
<li>https://www.waz.de/lokales/gelsenkirchen/article409040278/wegen-bedrohung-csd-in-gelsenkirchen-kurzfristig-abgesagt.html</li>
<li>https://www.ndr.de/nachrichten/niedersachsen/oldenburg_ostfriesland/Angriffe-nach-CSD-Demo-in-Emden,csd1466.html</li>
<li>https://www.zdfheute.de/panorama/kriminalitaet/csd-regensburg-demonstration-bedrohungslage-polizei-100.html</li>
</ul>
I found out that the Amadeu Antonio Foundation had documented all counter-demonstrations to and attacks on queer pride parades in 2024. I scraped their website to get a dataset that I could use for analysis:
<ul>
<li>https://www.amadeu-antonio-stiftung.de/csds-schuetzen/</li> 
</ul>
I wanted to see how this connects to growing poltical extremism so I mapped the incidents and brought them together in QGIS with elections results for the ultra-right-wing party AfD provided by the election supervisor. I styled the map in Illustrator. I chose second-vote results since the AfD does not have direct candidates in every election district and I believe that those are more representative of actual party approval since choosing the direct candidate for your first vote often is a tactical decision based on who has better chances at winning the district. <br>
I analyzed the descriptions using R to see how often right-wing extremists were involved in the incidents.<br>
I also read about pride parades struggling with their funding due to US companies withdrawing it, but they are reluctant to disclose which sponsors exactly they lost. So I looked up the 2022 (to have a 3-year comparison) version of the website of Germany's biggest pride parade in Cologne on archive.org, scraped the sponsor logos and then did the same for the 2025 website to compare.<br>
Then I also had a pretty basic look at the data provided by the German Department of the Interior and the Federal Office of Criminal Investigation. I would have liked to look at spatial distribution, but unfortunately, this data didn't have any breakdown by region. (I considered asking for that, but being familiar with the answer speed of German ministeries, I was pretty certain that I wouldn't get an answer in time.) Again, I wanted a 3-year comparison so I chose data from 2021 and 2024. The data was in a PDF so I had to extract it by hand but it wasn't a lot si that was fine.<br>
Finally, I wanted to also have a look at whether this connects to any cultural developments. I found a study by GLAAD which analyzes the number of queer characters in TV and film. I chose to only take into account the number for streaming services as their content is consumed in Germany as well. There is no data on this specifically for Germany - and no one watches German TV anyway.<br>
Here are links to all the sources I used:
<ul>
<li>https://www.nsu-watch.info/2025/06/demonstrationen-angriffe-und-stoerungen-nazis-greifen-queeres-leben-an-ein-rueckblick-auf-die-pride-saison-2024/</li> 
<li>https://www.absatzwirtschaft.de/das-sind-die-sponsoren-des-christopher-street-days-259845/</li> 
<li>https://www.queerpridedd.org/index.php/2024/11/15/rechtsextreme-gegen-csds-2024-daten-analysen-strategien/ </li> 
<li>https://www.bpb.de/kurz-knapp/taegliche-dosis-politik/557829/lagebericht-queerfeindlichkeit-nimmt-zu/ </li> 
<li>https://www.amadeu-antonio-stiftung.de/csds-schuetzen/</li> 
<li>https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/Lagebilder/SicherheitLSBTIQ/SicherheitLSBTIQ_node.html  </li> 
<li>https://cemas.io/publikationen/neue-generation-neonazis-mobilisierung-gegen-csd-veranstaltungen/</li> cemas_-_2024-11_-_research_paper_-_neue_generation_neonazis.pdf </li> 
<li>https://dserver.bundestag.de/btd/20/131/2013144.pdf </li> 
<li>https://www.bka.de/DE/AktuelleInformationen/StatistikenLagebilder/PolizeilicheKriminalstatistik/PKS2024/PKSTabellen/BundFalltabellen/bundfalltabellen.html?nn=240844 </li> 
<li>https://glaad.org/whereweareontv23/executive-summary</li> 
<li>https://public.opendatasoft.com/explore/dataset/georef-germany-kreis/export/?disjunctive.krs_name&disjunctive.lan_code&disjunctive.lan_name&disjunctive.krs_code&disjunctive.krs_name_short&sort=year </li> 
<li>https://www.bundeswahlleiterin.de/bundestagswahlen/2025/ergebnisse/bund-99.html</li> 
</ul>