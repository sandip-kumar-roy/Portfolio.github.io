const links = document.querySelectorAll('.Link');


const sections = document.querySelectorAll('section')


let activeLink=0;


links.forEach((Link,i) =>
{
  
    Link.addEventListener('click', () => 
    {
        
        if(activeLink != i)
        {
          
            links[activeLink].classList.remove('active');

            
            Link.classList.add('active');

            
            sections[activeLink].classList.remove('active');

            
            setTimeout(() => {
                
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }

    })
})