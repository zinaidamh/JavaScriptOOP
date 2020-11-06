

class Button
{

    constructor(width,height,background,value)
    {
        this.width=width;
        this.height=height;
        this.background=background;
        this.value=value;
    
    }

    render()
    {
      console.log(this);
      let btn=this.create();
      console.log(btn.style.borderRadius);
      document.body.appendChild(btn);
    
    }
    create()
    {
      let btn=document.createElement("input")
      btn.type="submit";
      btn.style.width=this.width;
      btn.style.height=this.height;
      btn.style.backgroundColor=this.background;
      btn.value=this.value;
      return btn;
    }

}


class ModernButton extends Button
{

    constructor(width,height,background,value, borderRadius)
    {
         super(width,height,background,value)
         this.borderRadius=borderRadius;
    }

   
    create()
    {
      let btn=super.create();
      console.log('modern btn created')
      console.log(btn);
      btn.style.borderRadius=this.borderRadius;
      console.log('radius created');
      return btn;
    }
}

let mybutton=new Button('200px','100px','orange','Hello');
mybutton.render();
let newbutton=new ModernButton('300px','50px','green','New',"5px 20px 5px");
newbutton.render();

