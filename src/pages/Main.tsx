import React from 'react';
import './Main.css';
import m1 from "../images/monster/m1.png";
import FlipCard from '../components/FlipCard';

import frontBB from '../images/monster/b1.png';
import backBB from '../images/monster/b2.png';
import frontS from '../images/monster/s1.png';
import backS from '../images/monster/s2.png';
import frontH from '../images/monster/h1.png';
import backH from '../images/monster/h2.png';



const Main: React.FC = () => {
  return (
    <div className="main">
      <h1 className="main-title">
        How transformation challenges the notion of what it means to be human.
      </h1>
      <p className="main-subtitle">
        Films analyzed: Beauty and the Beast, Sorry to Bother You, High Life
        <br />
      </p>

      <div className="essay-content">
        <h2>Transformation and the Human Experience: Examining Beauty and the Beast, Sorry to Bother You, and High Life</h2>
        <p>
          In Jean Cocteau’s <em>Beauty and the Beast</em>, Boots Riley’s <em>Sorry to Bother You</em>, and Claire Denis’ <em>High Life</em>,
          transformation is used as a way to explore what it means to be human. Whether it is physical, emotional, or forced upon
          the characters, these transformations expose the systems that strip individuals of their autonomy and humanity, such as
          societal expectations, corporate exploitation, or scientific experimentation.
        </p>
        <p>
          In essence, each film challenges viewers to reflect on how transformation can reveal, complicate, or completely unravel
          the essence of humanity.
        </p>

        <h3>Transformation as a Reflection of Societal Expectations: <em>Beauty and the Beast</em></h3>
        
        <p>
        In Beauty and the Beast, transformation works on both physical and emotional levels to question societal ideas of beauty and worth. The Beast’s animalistic appearance and Belle’s delicate, graceful beauty highlight society’s tendency to judge people based on their looks. At first, the Beast’s frightening form makes him seem monstrous inside and out. But as Belle gets to know him, his kindness and vulnerability come through, showing that true humanity exists beyond appearances. 
        <br/><br/><br/>
        Belle’s emotional transformation as she learns to see past the Beast’s exterior and recognize his inner goodness challenges viewers to reconsider their assumptions about beauty and value. However, the Beast’s final transformation into a handsome prince complicates this message. While it resolves his curse, it reinforces the idea that love and happiness are tied to physical beauty. Even though the story encourages us to look beyond appearances, the ending implies that outward beauty still matters. Overall, the film battles with this tension between inner and outer beauty, leaving the audience to reflect on whether we can truly move beyond surface-level judgments to define someone’s worth.
        </p>
        <FlipCard frontImage={frontBB} backImage={backBB} />

        
        <h3>Transformation as a Tool of Corporate Greed: <em>Sorry to Bother You</em></h3>
       
        <p>
        In Sorry to Bother You, transformation is used to show how corporate greed and exploitation can completely strip away humanity. Cassius Green’s journey from telemarketer to Equisapien is a wild and disturbing way of showing how capitalism treats workers as nothing more than tools for making money. His transformation into a horse-like creature is ridiculous but also horrifying, showing how far companies like WorryFree will go to squeeze productivity out of people, even if it means turning them into something completely inhuman. It’s an extreme, exaggerated version of real-world labor exploitation, where workers are often treated as disposable.
        <br/><br/><br/>
        Cassius’s transformation is both physical and symbolic. Physically, it takes away his human form, turning him into something created only to serve a corporate agenda. Symbolically, it represents how he loses control over his life and becomes just another piece in WorryFree’s system. While Cassius eventually leads the Equisapien rebellion, the ending of the movie doesn’t give any easy answers. Even as he fights back, there’s a lingering question of whether resistance can truly break free from the system that created it. Sorry to Bother You uses transformation to show how systems of power can strip people of their humanity, pretending it’s all for progress when it’s really just another way to keep control.

        </p>
        <FlipCard frontImage={frontS} backImage={backS} />

        <h3>Transformation as an Existential Struggle: <em>High Life</em></h3>
        
        <p>
        In High Life, transformation reflects the deep existential struggle of its characters as they deal with isolation, dehumanization, and the inevitability of death. Unlike more obvious physical changes in other films, the transformations in High Life are subtle and internal, shaped by how the characters cope with their lack of autonomy and the hopelessness of their situation. The spaceship itself acts as a force of transformation, stripping the inmates of their humanity and reducing them to tools for scientific experimentation.
        <br/><br/><br/>
        Monte’s journey highlights a transformation rooted in resistance. While others on the ship succumb to despair, like Tcherny losing himself in his garden or Boyse’s reckless attempt to take control by leaving the ship, Monte holds on to his autonomy. His decision to reject the “fuck box” is not just about abstinence; it is a way of protecting the last piece of himself that the system cannot take. His transformation is not about what the system imposes but about what he chooses to preserve: his humanity and his role as a father to Willow.
        <br/><br/><br/>
        Overall High Life uses transformation to explore what it means to survive when faced with an indifferent universe, showing how people adapt, resist, or fall apart when stripped of everything they know. Transformation in this story is not just about change but about what remains when everything else has been taken away.

        </p>
        <FlipCard frontImage={frontH} backImage={backH} />

        <h3>Intersections of Transformation Across the Films</h3>
        
        <p>
        A recurring theme in these films is the struggle to lose and reclaim agency. The Beast, Cassius, and Monte each face systems designed to strip them of control over their bodies and identities. Their transformations, whether through a curse, genetic modification, or invasive experiments, force them to confront dehumanizing forces while trying to preserve their humanity. Despite their differences, their stories emphasize the resilience of the human spirit, even as they expose the oppressive systems that enforce these changes.
        <br/><br/>
        In Beauty and the Beast, the Beast’s transformation allows him to challenge society’s shallow ideals of beauty, proving that true humanity lies in character rather than appearance. His journey from a terrifying creature to a kind and vulnerable figure shows how transformation can shift both self-perception and the way others view him.
        <br/><br/>
        In Sorry to Bother You, Cassius’s transformation into an Equisapien exposes how resilience may not be enough to fully escape exploitation. Although his physical transformation fuels rebellion, it also shows the overwhelming power of corporate greed and its ability to co-opt and control even those who resist. His struggle highlights the limitations of resistance within a system designed to strip individuals of autonomy.
        <br/><br/>
        In High Life, Monte’s transformation is less physical and more about his choices as a prisoner stripped of hope. Despite his dehumanizing circumstances, Monte’s decision to care for Willow reflects his ability to find purpose and meaning in the face of despair. Through his transformation from an isolated prisoner to a protective father, Monte shows that even within a system designed to erase humanity, it is possible to reclaim a sense of agency and connection.
        <br/><br/>
        Another shared element is the uncertainty of transformation’s outcomes. In Beauty and the Beast, the Beast’s transformation into a prince resolves the curse but complicates the film’s critique of beauty standards by aligning inner goodness with outward appearance. In Sorry to Bother You, Cassius’s transformation into an Equisapien sparks rebellion, yet the film leaves open questions about whether resistance can truly dismantle an exploitative system. In High Life, Monte’s choice to raise Willow suggests hope and renewal, but the looming black hole reminds us of the inevitability of death. These ambiguous endings show that transformation is rarely straightforward; it can be a curse, a chance for growth, or both at once. Together, the films explore the complicated nature of change, revealing its power to challenge and reshape what it means to be human.
        </p>
      </div>
      <img src={m1} alt="collage" className="photo1" />
    </div>
    

  );
};

export default Main;
