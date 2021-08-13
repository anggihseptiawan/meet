import { useRef, useEffect, useState, createContext } from 'react';
import { Container, Text, Image, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';

export const IntersectionContext = createContext({ inView: true });

export default function Motion() {
  const MotionBox = motion(Box);

  const [inView, setInView] = useState(false);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  });

  // const animation = useAnimation();
  const reset = false;

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    // if (inViewNow) {
    //   return setInView(inViewNow);
    // }

    // if (reset) {
    //   return setInView(false);
    // }
    setInView(true);
    console.log(inViewNow);
  }, [intersection, reset]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 1
      }
    }
  };

  return (
    <Container maxW="container.lg" py="20">
      {/* <MotionBox initial="hidden" animate="visible" variants={variants}>
        <Text>Hello..</Text>
      </MotionBox>
      <MotionBox initial="hidden" animate="visible" variants={variants} mb="40">
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad fugit tenetur vitae, minima assumenda ea beatae
          laudantium voluptate omnis quas!
        </Text>
      </MotionBox> */}
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro tempore illum libero eligendi quia vitae est
        officia, pariatur facere fuga corrupti incidunt sit amet dicta tenetur impedit quasi ipsam maiores eum culpa
        esse architecto? Ducimus impedit nemo, consectetur possimus odit reprehenderit, ipsa illo optio unde doloribus
        qui tenetur dignissimos rem magni provident quia ab iure ipsam iste, ea officiis laudantium.
      </Text>
      <Text mb="120vh">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aspernatur in soluta numquam saepe quod nihil
        adipisci veniam assumenda voluptatibus nam harum tempora sequi, provident exercitationem debitis voluptatum
        minima voluptates placeat? Aperiam, assumenda a quidem, repellendus cumque sit harum, exercitationem aspernatur
        distinctio debitis commodi libero veniam sunt eius labore nesciunt?
      </Text>
      <IntersectionContext.Provider value={{ inView }}>
        <div ref={intersectionRef} style={{ background: 'blue' }}>
          {intersection && intersection.intersectionRatio < 1 ? 'Obscured' : 'Fully in view'}
          <MotionBox initial="hidden" variants={variants} animate="visible">
            <Image src="/images/meetface.png" alt="meetaface" />
          </MotionBox>
        </div>
      </IntersectionContext.Provider>
    </Container>
  );
}
