import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react"

const Header = () => {
    return (
        
        <>
        <Flex p="2rem" direction="column" alignItems="center">

            <Heading as='h1' size='4xl' noOfLines={1} className="tasklist-title">
                TaskListe de Clément
            </Heading>
       <Text mt='1rem' className="taskliste-slogan">

        Taslkiste est un outil open source a vous de jouer !
       </Text>
       
       
       
       
       
       </Flex>
        
        </>
        
        
        )
    }
    
    export default Header