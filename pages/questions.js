export default function QueryBuilder(input){

  const  default_system = "please use html <p>, <ul> tag to style your response.";
  const user_role = "we are looking for the information related to the  involve in an activity of "+input;
 let queries = [
 {
 	title: input +"  Overview",
 	system: default_system,
  desc: "Provide the overview of "+input+ ", explain the benefit of participating in it",
 	query: user_role +", you need to provide an overview "+input+" to kids who may interested, explain what is "+input+" in short and then highlight benefits.",

 },
{
 	title: "Devleopment path ",
 	system: default_system,
  desc: "Describe the development path in general.",
 	query: user_role +", you need to explain development path in general, please leveled up. "

 },

 {
 	title: "Key Competitions",
 	system: default_system,
  desc: "List key competitions you may interested.",
 	query: user_role +", you need to provide key competitions for Junior and categorize them by age , provide the link, plus briefly description"

 },
 {
  title: "Howard Gardner's theory of multiple intelligences",
  system: default_system,
  desc: "Howard Gardner's theory of multiple intelligences across all eight intelligences, along with the reasons for each rating",
  query: "Can you provide the rating of kids participating in event of "+input+ " based on Howard Gardner's theory of multiple intelligences across all eight intelligences, give overall rate across all eight intelligences and list the reason."

 },
 {
 	title: "Cost as hobby",
  system: default_system,
 	desc: "Porvide the cost in general",
 	query: user_role +"you need to provide a list of cost as developing it as hobby, provide cost range and total cost"

 },
  {
 	title:  "Professional career path overview",
 	system: default_system,
 	query: user_role +", you need to explain what kids need to do if they want to become pro in the future"

 },
 {
 	title:  "Schools in USA",
 	system: default_system,
  desc: "The universities that provide good tranning program",
 	query: user_role +", you need to provide best college in the USA that provide pro tranning if possible "

 },
 {
 	title:  "Career",
 	system: default_system,
  desc: "Posible career paths in this field",
 	query: user_role +", you need to provide possible career path in this field and possible income revenue for each path."

 },
 {
  title:  "Traning Centers & Programs ",
  system: default_system,
  desc: "",
  query: user_role +", you need to provide tranning program and traning center near maryland, virginia and washington dc area."

 }
 ]
 return queries;
}


 	