const getGenereteBtn = document.querySelector('.generete-btn');
const main = document.querySelector(".main")
const genereted = document.querySelector(".genereted")

const essayEx = 
[
"Some people think that the government is wasting money on the arts and that this money could be better spent elsewhere.\n\nTo what extent do you agree with this view?", 
"Art is considered an essential part of all cultures throughout the world. However, these days fewer and fewer people appreciate art and turn their focus to science, technology and business. \n\nWhy do you think that is?\n\nWhat could be done to encourage more people to take interest in the arts?",
"Some people think that art is an essential subject for children at school while others think it is a waste of time.\n\nDiscuss both sides and give your opinion.",
"Artists need a certain amount of freedom to develop their creativity. Some people think that artists should have total freedom to express any thoughts and ideas.\n\nTo what extent do you agree or disagree?",
"Most artists earn low salaries and should therefore receive funding from the government in order for them to continue with their work.\n\nTo what extent do you agree or disagree?",
"Due to the development and rapid expansion of supermarkets in some countries, many small, local business are unable to compete. Some people think that the closure of local business will bring about the death of local communities.\n\nTo what extent do you agree or disagree?",
"In some countries, a few people earn extremely high salaries. Some people think that this is good for a country, while others believe that the government should control salaries and limit the amount people can earn.\n\nDiscuss both views and give your opinion. (Reported 2017, Academic Test)",
"Companies should provide sports and social facilities for local communities.\n\nTo what extent do you agree or disagree?",
"Large businesses have big budgets for marketing and promotion and as a result, people gravitate towards buying their products.\n\nWhat problems does this cause?\n\nWhat could be done to encourage people to buy local products?",
"An increasing number of people are buying what they need online.\n\nWhat are the advantages and disadvantages for both individuals and companies to shopping online?",
"Marketing and promotion is the key to a successful business.\n\nTo what extent do you agree?",
"The performance of staff can have a significant impact on the success of a company.\n\nWhat can companies do to increase staff productivity?",
"Some companies have uniforms for their staff which must be worn at all times.\n\nWhat are the advantages for a company of having a uniform?\n\nAre there any benefits of having a uniform for the staff?",
"Some people think that when recruiting, companies should aim to take on people who are innovative and able to work independently while others considered  they should recruit people who are able to work in a team and follow instructions.\n\nDiscuss both views and give your opinion.",
"Some people think that the only way to have success in business is to have a unique product.\n\nWhat factors, do you think, influence the success of a company?",
"Small businesses should avoid recruiting young women who do not have their own family in order to avoid paying maternity leave later on.\n\nTo what extent do you agree or disagree?",
"Sales companies should recruit people who are hungry for money as they will make the most dedicated workers.\n\nDo you think money is the driving force behind hard work?\n\nWhat factors should be taken into consideration when recruiting staff for sales positions?",
"The reason that most individuals are in debit is due to the overuse as well as irresponsible use of credit cards. Banks should not issue credit cards unless they are completely sure of an individual’s ability to pay back their debits.\n\nTo what extent do you agree with this?",
"Some people believe that the higher a product is priced, the more likely it is that people will want to buy it.\n\nTo what extent does price influence potential buyers?\n\nWhat other factors influence people to buy a product?",
"Some people think that the only way to judge someone’s success in business is by the amount of money they make.\n\nIs money a true indicator of the success of a business?\n\nIn what other ways could success in a business be measured?",
"It is common practice for some students to take a gap year between high school and university in order to do charitable work abroad in underdeveloped countries.\n\nWhat are the advantages and disadvantages for young people of doing volunteer work?",
"Rich countries are getting richer while poor countries are getting poorer.\n\nWhat is the cause of this?\n\nWhat could be done to solve this problem?",
"Some people think that it is better for a country’s economy for people to spend money while others believe that it would be better for people to save money.\n\nDiscuss both sides and give your opinion.",
"Some people fail in school, but end up being successful in life.\n\nWhy do you think that is the case?\n\nWhat is the most important thing to succeed in life? (Reported 2017, GT Test)",
"Nowadays celebrities are more famous for their glamour and wealth than for their achievements, and this sets a bad example to young people.\n\nTo what extent do you agree or disagree? (Reported 2017, Academic Test)",
"With an increasing population communicating via the internet and text messaging, face to face communication will become a thing of the past.\n\nTo what extent do you agree?",
"More and more businesses as well as individuals are choosing to communicate either professionally or socially using technology rather than being face to face.\n\nDiscuss the advantages and disadvantages of using technology for communicating.",
"Many young children have unsupervised access to the internet and are using the internet to socialise with others. This has can lead to a number of dangerous situations which can be threatening for children.\n\nWhat problems do children face when going online without parental supervision?\n\nHow can these problems be solved?",
"Some people think that being able to communicate with others online is breaking down geographical barriers and enabling people, who would normally never have the chance to meet, to communicate.\n\nWhat are the advantages of international communication online?\n\nAre there any disadvantages to this?",
"With the development of online communication, people will never be alone and will always be able to make new friends.\n\nTo what extent do you agree?",
"Communication through text messaging and other instant forms of online communication are short and basic. Some people think this will be the death of grammar and spelling.\n\nDo you agree or disagree?",
"Some people think that intelligence is innate while others think that we can improve our intelligence through learning.\n\nDiscuss both sides and give your opinion.",
"Our personalities are predetermined as a result of our genes before we are born and there is nothing that can be done to alter our character traits.\n\nTo what extent do you agree?",
"Many management interviews are based around assessing not only a person’s level of experience and knowledge but also their personality.\n\nIs leadership an innate skill?\n\nWhat other characteristics do companies look for in a manager?",
"Some people think that women are generally more peaceful than men as their characters are naturally more nurturing than aggressive.\n\nTo what extent do you agree with this?",
"Some people think certain prisoners should be made to do unpaid community work instead of being put behind bars.\n\nTo what extent do you agree? (Reported 2017, GT Test)",
"The crime rate nowadays is decreasing compared to the past due to advance technology which can prevent and solve crime.\n\nDo you agree or disagree? (Reported 2017, Academic Test)",
"Many criminals commit further crimes as soon as they released from prison.\n\nWhat do you think are the causes of this?\n\nWhat possible solutions can you suggest? (Reported 2017, Academic Test)",
"It is often thought that the increase in juvenile crime can be attributed to violence in the media.\n\nDo you agree that this is the main cause of juvenile crime?\n\nWhat solutions can you offer to deal with this situation?",
"In some societies, the number of crimes committed by teenagers is growing. Some people think that regardless of age, teenagers who commit major crimes should receive adult punishment.\n\nTo what extent do you agree?",
"Some countries are struggling with an increase in the rate of crime. Many people think that having more police on the streets is the only way to reduce crime.\n\nTo what extent do you agree?",
"Some people think that women should not be allowed to work in the police force.\n\nDo you agree or disagree?",
"Many crimes are often related to the consumption of alcohol. Some people think that the best way to reduce the crime rate is to ban alcohol.\n\nDo you think this is an effective measure against crime?\n\nWhat other solutions can you suggest?",
"Many people believe that having a fixed punishment for all crimes is more efficient.\n\nWhat are the advantages and disadvantages of having a fixed punishment?",
"Some people think that the government should be responsible for crime prevention, while others believe that it is the responsibility of the individual to protect themselves.\n\nDiscuss both sides and give your opinion.",
"The death penalty is the best way to control and reduce serious crime.\n\nTo what extent do you agree?",
"While it is sometimes thought that prison is the best place for criminals, others believe that there are better ways to deal with them.\n\nWhat is your opinion?",
"Crime rate, in most countries, is often higher in urban areas than in rural areas.\n\nWhy do you think that is?\n\nWhat can be done to reduce the crime rate?",
"Some people think that poverty is the reason behind most crimes.\n\nDo you agree or disagree?",
"Internet crime is increasing rapidly as more and more people are using the internet to make financial transactions.\n\nWhat can be done to tackle this problem?",
"Some educationalists think that international exchange visits will benefit teenagers at the school. To what extent do the advantages outweigh the disadvantages? (Reported 2020, Academic Test)",
"For centuries, important parts of education have remained such as reading, writing and maths. With the advent of computers, some people think that computer skill be made as a fourth skill to be added to the listTo what extent do you agree? (Reported 2017, Academic Test).",
"The government should allocate more funding to teaching sciences rather than other subjects in order for a country to develop and progress. To what extent do you agree? (Reported 2017, Academic Test)",
"Discipline is an ever increasing problem in modern schools. Some people think that discipline should be the responsibility of teachers, while others think that this is the role of parents. Discuss both sides and give your opinion.",
"Some people believe that children should not be given homework everyday, while others believe that they must get homework everyday in order to be successful at school. Discuss both sides and give your opinion. (Reported 2017, GT Test)",
"Some children receive almost no encouragement from their parents regarding their performance at school, while other children receive too much pressure from their over enthusiastic parents which can have a negative impact on the child. Why do you think some parents put too much pressure on their children to perform well at school? What do you think the role of a parent should be in their child’s education?",
"The role of education is to prepare children for the modern world. Schools should cut art and music out of the curriculum so that children can focus on useful subjects such as information technology. To what extent do you agree?",
"Some parents believe that their children should do educational activities during their free time. Others say that in this way children are under pressure. Discuss both views and give your opinion. (Reported 2017, GT Test)",
"Some people think that teachers should be able to ask disruptive children to leave the class. Do you think it is the best way to deal with a disruptive child in the classroom? What other solutions are there?",
"Education should be accessible to people of all economic backgrounds. All levels of education, from primary school to tertiary education, should be free. To what extent do you agree with this opinion?",
"The current trend in education is to move away from traditional exams and instead have continuous assessment over the school year. What do you think of this trend?",
"Some people think that educated people are more valuable than people who have learned skills through experience. Do you think that educated people are the most valuable for society?",
"Being able to speak a foreign language is an advantage these days. Some people think that children should start learning a foreign language at primary school, while others think children should begin in secondary school. Discuss both sides and give your opinion.",
"The gap between education in richer countries and education in poorer countries is a growing concern. What solutions can you suggest to deal with this situation?",
"Some schools are very strict about their school uniforms and the appearance of their pupils, while other schools have a very relaxed dress code. What are the advantages and disadvantages of children of having a school uniform?",
"In some high schools, part of the curriculum requires students to participate in community work such as helping the elderly or disabled. In what way do children benefit from this? Do you think it should be part of the curriculum?",
"The best way to help underachieving pupils is to have compulsory after school activities which they must attend. This way they will become more involved in school and their grades will improve. To what extent do you agree?",
"Some people think that parents have the greatest influence on their child’s academic development, while others think that a child’s teacher has more influence. Discuss both sides and give your opinion.",
"In some countries, girls and boys are educated in different schools rather than in the same school. What are the advantages and disadvantage of this?",
"Some people think that it is beneficial for old people to learn something new while others believe that once a person is past 65 years of age it is too late to learn. What is your opinion?",
"It is thought by some that a school teacher’s role is to motivate and inspire students. However, other people believe that a teacher’s primary role is to pass on knowledge. What do you think is the role of a teacher?",
"Fewer schools are requiring children to learn and improve their hand writing skills. Do the advantages outweigh the disadvantages of this trend?",
"Human activity has had a negative impact on plants and animals around the world. Some people think that this cannot be changed, while others believe actions can be taken to bring about a change. Discuss both and give your opinion. (Reported 2017, Academic Test)",
"It is often said that governments spend too much money on projects to protect wildlife, while there are other problems that are more important? Do you agree or disagree? (Reported 2017, GT Test)",
"Some people think the best way to solve global environmental problems is to increase the cost of fuel. To what extent do you agree or disagree? (Reported 2017, Academic Test)",
"Some people think an international car-free day is an effective way to reduce air pollution. Others think there are more effective ways do to this. Discuss both sides and give your opinion. (Reported 2017, Academic Test)",
"While some people consider global warming to be the most pressing environmental problem which we have at the moment, others believe that deforestation has a more devastating impact on our world. Discuss both sides and give your opinion.",
"The government should reduce the amount of money spent on local environmental problems and instead increase funding into urgent and more threatening issues such as global warming. To what extent do you agree?",
"With increasing populations and ever growing urban centers, many countries are losing their natural beauty spots. What benefits are there to protecting places of natural beauty? How can this be solved?",
"Although many people value their public parks, this space could be better used for other purposes such as residential areas for the ever growing population or to develop business and boost economies. To what extent do you agree or disagree with this?",
"With deforestation, urban development and illegal hunting, many animal species are becoming endangered as they lose their habitat and some are even threatened to the point of extinction. Do you think it is important to protect animals? What measures can be taken to deal with this problem?",
"Global warming is one of the biggest threats to our environment. What causes global warming? What solutions are there to this problem?",
"Both governments and individuals are spending vast amounts of money protecting animals and their habitat. This money could be better spent dealing with fundamental issues in society such as poverty and health care. To what extent do you agree?",
"As a result of growth in some urban centers, the environment in those cities is deteriorating. How could this issue be tackled by both the government and individuals?",
"Some people think that current environmental issues are global problems and should therefore be dealt with by the government while others believe that these problems can only be tackled by individuals. Discuss both sides and give your opinion.",
"Global environmental issues are the responsibility of rich nations not of poorer nations. Do you agree with this opinion?",
"Many people believe that global environmental problems should be dealt with internationally rather than domestically. What is your opinion?",
"Many animals are being hunted to the brink of extinction in order to fulfil the demand and greed of mankind for decorative purposes as well as for other reasons, such as traditional medicine. How can this issue be tackled?",
"Restricting air travel is the only way to prevent air pollution. Do you agree?",
"Nowadays parents put too much pressure on their children to succeed. What is the reason for doing this? Is this a negative or positive development? (Reported 2017, Academic Test)",
"Some people think it is better for children to grow up in the city, while others think that life in the countryside is more suitable. What are the advantages and disadvantages of both places? (Reported 2017, GT Test)",
"In many modern societies, grandchildren rarely spend any quality time with their grandparents. What do you think are the consequences of this?",
"Children can learn effectively by watching television. Therefore they should be encouraged to watch television regularly at home and at school. To what extend do you agree or disagree? (Reported 2017, Academic Test)",
"Some people think that the role of parents is to discipline their children and teach them about right and wrong. Other people consider that the main responsibility of parents is to nurture their children and provide them with a safe environment to grow up in. Discuss both sides and give your opinion.",
"Most modern families have both parents working and as a result children spend less and less time with their parents. What is the reason for this? What problems can this cause?",
"The nuclear family is well adapted to move geographically due to its size. Do you think children benefit in any way from moving? Do you think the advantages outweigh the disadvantages?",
"In many countries it is common for families to own and run their own business. Some people think this is the best way to run a business while others consider this a potential source of problems. What is your opinion?",
"In the past, the older generation were a source of knowledge and experience. Nowadays, the older generation have little understanding or experience of the modern world. Has this had any negative impact on the way the elderly are treated by society and the family? What could be done to solve this situation?",
"In many western countries there is an increasing number of couples choosing to have no children. What are the advantages and disadvantages to couples having no children?",
"These days people are living into their 90’s and beyond. As a result, there is increasing concern about care for the elderly. Do you think it is the responsibility of the family to care for their elderly members or should the government be held responsible?",
"With a growing world population one of the most pressing issues is that of feeding such a large number of people. Some people think that GM foods offer a viable solution to this problem. To what extent do you agree or disagree?",
"With a growing population, many people believe that we should focus on producing more GM foods. What are the advantages and disadvantages of doing this?",
"An increasing number of children are overweight which could result many problems when they grow older both in terms of their health and health care costs. Why do you think so many children are overweight? What could be done to solve this problem?",
"With a fast pace of modern life more and more people are turning towards fast food for their main meals. Do you think the advantages outweigh the disadvantages?",
"With an increasing number of people eating fast food, which if eating too regularly can cause health issues, some people think that the only solution is to ban it completely. To what extent do you agree?",
"Everyone should adopt a vegetarian diet because eating meat can cause serious health problems. Do you agree or disagree?",
"Many processed foods and ready-made meals contain preservatives and chemicals. What are the advantages to this? Do you think the advantages outweigh the disadvantages?",
"Over the last few decades, the media has promoted the image of young thin women as being ideal. What problems has this caused? What solutions can you suggest to this issue?",
"Should governments make decisions about people’s lifestyle, or should people make their own decisions?",
"A government has a responsibility to its citizens to ensure their safety. Therefore, some people think that the government should increase spending on defense but spend less on social benefits. To what extent do you agree?",
"Some people think that the government is responsible for the rise in obesity in children, while others think it is the fault of the parents. Discuss both sides and give your opinion.",
"Some people think that the government should give money to creative people, such as artists and musicians. To what extent do you agree?",
"The government should lower the budget on the arts in order to allocate more money to education. To what extent do you agree?",
"Some people think that only the government can make significant changes in society, while others think that individuals can have a lot of influence. What is your opinion?",
"The prevention of health problems and illness is more important than treatment and medicine. Government funding should reflect this. To what extent do you agree?",
"The number of people who are at risk of serious health problems due to being overweight is increasing. What is the reason for the growth in overweight people in society? How can this problem be solved?",
"The amount of time spend on sport and exercise should be increased in schools in order to tackle the problem of overweight children? Do you think this the best way to deal with the problem? What other solutions can you suggest?",
"More and more people are suffering from health problems caused by a modern life style which cannot be treated with modern medicines. Some people think that a return to traditional medicine should be encouraged. To what extent do you agree?",
"Health care should not be provided for free regardless of a person’s income. The heath of a person is in their own hands and they should, therefore, be held accountable for that. Do you agree with this opinion?",
"The best way to improve health is to exercise daily. To what extent do you agree?",
"Some people think that public health is a the responsibility of the government while others think that people should be responsible for their own health. Discuss both sides and give your opinion.",
"Doctors should be responsible for educating their patients about how to improve their health. Do you agree with this?",
"Walking is known to be beneficial for health and yet fewer and fewer people are walking these days. What are the reasons for this? What can be done to tackle this problem?",
"In some countries, most people prefer to rent their homes rather than buying them. What are the advantages and disadvantages of renting a home? (Reported 2017, GT Test)0",
"Planting trees is very important for the environment. Some people says trees should be planted in the vacant areas of cities and towns, while other says housing facilities should be build instead. Do you agree or disagree ? (Reported 2017, Academic Test)",
"Many countries are experiencing population growth and need more homes. Should these new homes be constructed in existing cities or should new towns be built in the countryside? (Reported 2017, GT Test)",
"Nowadays, a lot of buildings, such as offices and  schools, are now being built with an open plan design. Why is that? Do you see this as a positive or negative development? (Reported 2017, Academic Test)",
"As computers translate quickly and accurately, learning foreign languages is a waste of time? To what extend do you agree or disagree. (Reported 2017, Academic Test)",
"Scientists predict that all people will choose to talk the same global language in the future. Do you think this is a positive or negative development? (Reported 2017, Academic Test)",
"Some people think that a person can never understand the culture of a country unless they speak the language. Do you agree with this opinion?",
"Some people think that you can never become fluent in a language unless you have spent time living or working in that country. To what extent do you agree?",
"Shopping is the favorite pastime for most of the young people. Why do you think is that? Do you think they should be encouraged to do some other useful activities? (Reported 2017)",
"Having more money and less free time is better than earning less money and having more free time. Discuss both views and state your opinion. (Reported 2017, GT Test)",
"Some companies sponsor sports as a way to advertise themselves. Some people think it is good, while others think there are disadvantages to this. Discuss both sides and give your opinion. (Reported 2017, Academic Test)",
"Violence in the media promote violence in society. To what extent do you agree?",
"Most people think that the truth should be objective rather than subjective when it comes to the news. Do you think all news is true?  What is the function of a newspaper?",
"More and more newspapers and news channels are using photographs to support their news articles and stories. Some people think that photographs are not a reliable source of news while others consider photographs to be irrefutable. Discuss both sides and give your opinion.",
"The majority of news being reported is bad news such as wars, famines, accidents and crime. Why do you think that is? Do you think the news should be a balance of both good and bad news?",
"In the last few decades there have been more and more cases of famous people being hounded by the press. Some people think that famous people in the media have no right privacy. To what extent do you agree?",
"People in the lime light have a responsibility to set an example for others by their good behaviour. Do you agree?",
"With the development of the media online, there is no future for the radio. To what extent do you agree?",
"Some people believe that what children watch on television influences their behaviour. Others say that amount of time spent watching television influences their behaviour. Discuss both views and give own opinion  (Reported in 2017)",
"Companies spend millions each year on advertising online, in magazines and on billboards. These adverts can encourage people to buy goods that they do not really need. What are the positive and negative affects of consumerism?",
"One of the prime times for advertising on TV is when children get back from school. Some people think that advertisements aimed at children should not be allowed. What is your opinion?",
"Many people buy products that they do not really need and replace old products with new ones unnecessarily. Why do people buy things they do not really need? Do you think this is a good thing?",
"Many people think that fast food companies should not be allowed to advertise while others believe that all companies should have the right to advertise. What is your opinion?",
"Some people think books are losing importance as a source of information and entertainment. To what extent do you agree? (Reported 2017, GT)",
"Children who start reading earlier in life, perform better later on in their school studies. How important are early reading skills in a child’s academic performance? What other preschool factors influence a child’s later academic achievements?",
"Some people think that children who spend a lot of time reading children’s story books are wasting their time which could be better used doing other more useful activities. To what extent do you agree?",
"Some people think that e-books are the death of paper books while others think that paper books will never disappear. Discuss both sides and give your opinion.",
"Libraries should focus on improving their technological resources rather than in building a larger collection of paper books. To what extent do you agree?",
"Public libraries will soon now longer be housed in a building as all facilities and books will be available online for all to access. Discuss the advantages and disadvantages of public libraries only existing online.",
"Many countries aim to improve their living standard by economic development, but some important social values are lost as a result. Do you think the advantages of economic development outweigh the disadvantages? (Reported 2017, Academic Test)",
"In many countries women no longer feel the need to get married. Some people believe that this is because women are able to earn their own income and therefore do not require the financial security that marriage can bring. To what extent do you agree?",
"Most societies has its homeless people. Some people think that the best way to help them is to give them money. To what extent do you agree?",
"More developing countries are given aid from international organisations to help them in their development plans. Some people argue that financial aid is important but others suggest that practical aid and advice are more important? Discuss both views and give your opinion. (Reported 2017, Academic Test)",
"Globalisation has both advantages and disadvantages. Discuss both and give your opinion.",
"In many countries, people are moving away from rural areas and towards urban areas. Why do you think that is? What problems can this cause?",
"With the development of modern society is the loss of traditional ways of life. Is it important to keep our traditional ways of life? How can this be achieved?",
"Every culture, throughout time, has recorded its history in one way or another. In what ways can history be passed on to the next generation? Why is history important to society?",
"All societies have their own music and art. In what way are music and art important for society and for the individual?",
"The population of most cities is growing as people move to cities to find work and new opportunities. What problems does overpopulation in cities cause? How can these problems be solved?",
"In many cities there is a lack of space to develop and as a result, in order to modernise, old buildings are demolished and replaced with new buildings. What are the disadvantages of knocking down old buildings? Do the advantages outweigh the disadvantages?",
"Some people think that a life is good for people while others believe that constant change can be too demanding on people. Discuss both sides and give your opinion.",
"It is sometimes thought that people who travel outside of their own country are more tolerant and understanding of others. To what extent do you agree?",
"Some scientists think that there are intelligent life forms on other planets and messages should be sent to contact them. Other scientists think it is a bad idea and would be dangerous. Discuss both views and give your own opinion. (Reported 2017, Academic Test)",
"The government is spending a lot of money to discover life on other planets. Some people think that government is wasting money and should spend more money addressing the problems of public. To what extent do you agree? (Reported 2017, Academic Test)",
"Some people think that space exploration is a waste of resources while others think that it is essential for mankind to continue to explore the universe in which we live. Discuss both sides and give your opinion.",
"Some people think that dangerous sports should be banned, while others think people should be free to choose. Discuss both views and give your opinion. (Reported 2017, Academic Test)",
"Some people think that sport teaches children how to compete, while others believe that children learn team work. Discuss both views and give your opinion.",
"Ensuring that children have regular physical exercise should be the responsibility of parents and therefore schools should not waste valuable school time having sports lessons as part of the curriculum. To what extent do you agree?",
"Many countries want to host international sports event, while other countries think that hosting sports events has more problems than benefits. Discuss both views & give your opinion. (Reported 2017, GT Test)",
"Some people think that companies should provide employees with exercise time during the day. What is your opinion about this?",
"With an increasing overweight population some people think universities should make sport a compulsory module on all degree courses. To what extent do you agree?",
"Professional sports people are often idolised by young children. Some people think that they, therefore, have a responsibility to be good role models at all times for children. Do you agree or disagree?",
"Some people think that sports involving violence, such as boxing and martial arts, should be banned from TV as well as from international sporting competitions. To what extent do you agree?",
"Many things that used to be done in the home by hands are now being done by machines. Does this development bring more advantages or disadvantages? (Reported 2017)",
"Some people argue that technological inventions, such as mobile phones, are making people socially less interactive. Do you agree or disagree? (Reported 2017, GT Test)",
"Modern technology is now very common in most work places. How do you think this has changed the way we work? Do you think there are disadvantages to relying too much on technology?",
"Some people think that the range of technology currently available is increasing the gap between rich people and poor people. Others think that it is causing the opposite effect. Discuss both views and give your opinion. (Reported 2017, Academic Test)",
"New household appliances have resulted in more free time for women and has enabled them to both work and run a home with dependent children. What are the advantages for a family when the mother works? Do you think the disadvantages outweigh the advantages?",
"With the development of technology children are now living in a world that is completely different to what it was 50 years ago. What problems does this cause for society and the family?",
"An increasing number of people are now using the internet to meet new people and socialise. Some people think this has brought people closer together while others think people are becoming more isolated. Discuss both sides and give your opinion.",
"More and more children as accessing the internet unsupervised and at a younger age. This can sometimes put children at risk. What problems do you think parents face when dealing with their children using the internet? How can this problem be solved?",
"Nowadays children watch a lot of TV and play video games. However, some people think that these activities are not good for a child’s mental health. To what extent do you agree or disagree? (Reported 2017, Academic Test)",
"It is common nowadays for each member of the family to have their own piece of modern technology. Some people think this will lead to a break down in family relationships and communication. To what extent do you agree?",
"Tourism is an ever growing industry. What benefits do you think tourism brings to individuals and society?",
"As a result of tourism and the increasing number of people travelling, there is an growing demand for more flights. What problems does this have on the environment? What measures could be taken to solve the problems?",
"Some people believe that to protect local culture, tourism should be banned in some areas whereas others think that change is inevitable and banning tourism will have no benefits. Discuss both sides and give your opinion.",
"As a result of tourism, many historical buildings and sites are being damaged beyond repair. What could be done to prevent this?",
"Some people think that when a person travels into a different culture they should adapt to the local practices and customs. To what extent do you agree?",
"The development of tourism contributed to English becoming the most prominent language in the world. Some people think this will lead to English becoming the only language to be spoken globally. What are the advantages and disadvantages to having one language in the world?",
"In some cities and towns all over the world, the high volume of traffic is a problem. What are the causes of this and what actions can be taken to solve this problem? (Reported 2017, Academic Test)",
"Some people think that in order to solve traffic and transportation problems people should be encouraged to live in cities rather than in suburbs or in the countryside. To what extent do you agree or disagree? (Reported 2017, Academic Test)",
"The impact that the growing demand for more flights has had on the environment is a major concern for many countries.  Some people believe that one way to limit the number of people travelling by air is to increase  tax on flights. To what extent do you think this could solve the problem?",
"Some people think that it should be compulsory for people to retake their driving test every 5 years. What are the advantages and disadvantages of doing this?",
"Some people think an international car-free day is an effective way to reduce air pollution. Others think there are more effective ways do to this. Discuss both sides and give your opinion. (Reported 2017, Academic Test)",
"One way to solve the problem of congestion on the roads is to increase the tax on private vehicles. How could this alleviate congestion? What other measures can you suggest to deal with congestion in cities?",
"Some people think that in order to deal with the problem of congestion in cities, privately owned vehicles should be banned in city centers, while others consider this to be an unrealistic solution. Discuss both sides and give your opinion.",
"A poor infrastructure hinders under-developed countries from progressing and modernising. Some people think that this should be the first problem tackled by foreign aid. To what extent do you agree with this opinion?",
"One way to solve the problem of congestion in cities is to build sky trains which run overhead rather than on or under the ground. What are the advantages and disadvantages of using this solution to solve congestion?",
"Some employers want to be able to contact their staff at all times, even on holidays. Does this development have more advantages than disadvantages? (Reported 2017, GT Test)",
"More and more people are moving away from an agricultural background to relocate to cities in order to look for work. What will be the consequences of this? What solutions can you offer? (Reported 2017, Academic Test)",
"Completing university education is thought by some to be the best way to get a good job. On the other hand, other people think that getting experience and developing soft skills is more important. Discuss both sides and give your opinion.",
"First impressions are important. Some people think that doing well in interviews is the key to securing a good job. To what extent do you agree?",
"Finding job satisfaction  is considered to be a luxury in many developing countries. Why do you think that is? Do you think job satisfaction is important?",
"Many people find it hard to balance their work with other parts of their lives. What are the reasons for this? How can this problem be overcome? (Reported 2017, Academic Test)",
"Doctors, nurses and teachers make a great contribution to society and should be payed more than entertainment and sports celebrities. Do you agree or disagree ? (Reported 2017, Academic Test)",
"Many children are encouraged by their parents to get a part time job in their free time. What are the advantages and disadvantages to children of doing so?",
"In many developing countries, there is an increasing movement of workers from rural areas into the cities. Why do you think this happens? What problems can this cause?",
"In some developing countries, it is difficult to get good teachers to work in rural areas which can have a negative impact on the education of children in those rural communities. Why do you think good teachers do not want to work in rural areas in developing countries? What could be done to solve this problem?",
"Having a good university degree guarantees people a good job. To what extent do you agree?",
"The number of people working online from home has grown in some countries. What advantages and disadvantages can come of this trend?",
"Some people with a good education and experience in their field decide to move abroad to work. Why do you think that is? What problems does this cause?",
"Paying all workers the same salary in a company promotes harmony and respect amongst colleagues. To what extent do you agree or disagree?",
"Getting promotion is one of the biggest drives for people to apply themselves and work hard in the modern work place. Why do you think people are so driven to get promotion? What other factors influence people to work hard?",
"Bringing in foreign workers to fill positions that domestic workers are unwilling to do can cause problems in the local community and should therefore be stopped. Do what extent do you agree with this?",
"Some people think that employers should ensure a supportive and pleasant work environment where each employee is respected and valued equally while others think employers should focus instead on providing better facilities and equipment. What is your opinion?",
"Some people think that people should choose their job based on income in order to provide security for their family. Do you think money is an important factor when choosing a job? What other factors should be considered?"
];

const getRandomExample = () => {
    const randomNum = Math.floor(Math.random() * essayEx.length);
    const example = essayEx[randomNum];
    essayEx.splice(randomNum, 1)
    return example
};


const drawRandomExample = () => {

    main.style.display = "none";

    if (genereted.innerHTML === ""){
        const newFilesWrapper = document.createElement('div')
        const createExample = document.createElement("p");
        const createTextArea = document.createElement("textarea");
        const wordCounter = document.createElement("div")

        createExample.innerHTML = getRandomExample();
        wordCounter.innerHTML = "word count: 0"

        createTextArea
        .addEventListener("input", function countWord() {
            let res = [];
            let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
            str.map((s) => {
                let trimStr = s.trim();
                if (trimStr.length > 0) {
                res.push(trimStr);
                }
          });
          wordCounter.innerText = "word count: " + res.length;
        });
        

        createExample.classList.add('example')
        createTextArea.classList.add('text-area')
        wordCounter.classList.add("word-count")
    
        genereted.append(newFilesWrapper)
        newFilesWrapper.appendChild(createExample)
        newFilesWrapper.appendChild(wordCounter)
        newFilesWrapper.appendChild(createTextArea)
        for (let i; i < essayEx; i++){
            if (createExample.innerHTML === essayEx[i]){
                essayEx.splice(i, 1)
            }
        }
        console.log(essayEx.length)
    }else{
        genereted.replaceChildren()
        if (genereted.innerHTML === ""){
            const newFilesWrapper = document.createElement('div')
            const createExample = document.createElement("p");
            const createTextArea = document.createElement("textarea");
            const wordCounter = document.createElement("div")
    
            createExample.innerHTML = getRandomExample();
            wordCounter.innerHTML = "word count: 0"
    
            createTextArea
            .addEventListener("input", function countWord() {
                let res = [];
                let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
                str.map((s) => {
                    let trimStr = s.trim();
                    if (trimStr.length > 0) {
                    res.push(trimStr);
                    }
              });
              wordCounter.innerText = "word count: " + res.length;
            });
            
    
            createExample.classList.add('example')
            createTextArea.classList.add('text-area')
            wordCounter.classList.add("word-count")
        
            genereted.append(newFilesWrapper)
            newFilesWrapper.appendChild(createExample)
            newFilesWrapper.appendChild(wordCounter)
            newFilesWrapper.appendChild(createTextArea)
            for (let i; i < essayEx; i++){
                if (createExample.innerHTML === essayEx[i]){
                    essayEx.splice(i, 1)
                }
            }
            console.log(essayEx.length)
        }
    }
}

getGenereteBtn.addEventListener('click', drawRandomExample)