#This is my React Journey


**The Assumed Structure of the FOOD APP***

components
    heading
      -logo
      -Navigations:about,home,cart

    Body
      -search 
      -restaraunt 
      -restaurant cards
    footer
      -links
      -address

**IN CLASS BASED COMPONENTS HOW MOUNTING WILL BE DONE**

How Mounting will Happen id we have two child compoents and one parent component

-Parent Constructor
-Parent Render
 
  -First Child Constructor
  -First Child Render

  -Second Child Constructor
  -Second Child Render

  <DOM UPDATED IN SINGLR BATCH>
  -First Child componentDidMount
  -Second Child componentDidMount

-Parent componentDidMount
