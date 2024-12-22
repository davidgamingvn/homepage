import React from "react";
import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaDatabase,
  FaGitAlt,
  FaSwift,
  FaMobile,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiGo,
  SiNextdotjs,
  SiFirebase,
  SiDotnet,
  SiGooglecloud,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiFlutter,
  SiCsharp,
  SiDart,
  SiXcode,
  SiR,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiJupyter,
  SiTerraform,
  SiVisualstudio,
} from "react-icons/si";

const MotionBox = motion(Box);

interface TechnologyCardProps {
  icon: React.ElementType;
  name: string;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  icon: Icon,
  name,
}) => {
  const bg = useColorModeValue("white", "gray.800");
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  const iconColor = useColorModeValue("gray.600", "gray.200");

  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <VStack
        bg={bg}
        p={3}
        borderRadius="lg"
        boxShadow="md"
        transition="all 0.3s"
        _hover={{ bg: hoverBg }}
        h="full"
        justify="center"
      >
        <Icon size="2em" color={iconColor} />
        <Text fontWeight="medium" textAlign="center" fontSize="sm" mt={2}>
          {name}
        </Text>
      </VStack>
    </MotionBox>
  );
};

interface TechnologySectionProps {
  title: string;
  technologies: { name: string; icon: React.ElementType }[];
}

const TechnologySection: React.FC<TechnologySectionProps> = ({
  title,
  technologies,
}) => (
  <Box mb={8}>
    <Heading as="h3" size="md" mb={4}>
      {title}
    </Heading>
    <SimpleGrid columns={[3, 4, 5]} spacing={6}>
      {technologies.map((tech, index) => (
        <TechnologyCard key={index} icon={tech.icon} name={tech.name} />
      ))}
    </SimpleGrid>
  </Box>
);

const Technologies = () => {
  const technologies = {
    languages: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Golang", icon: SiGo },
      { name: "Swift", icon: FaSwift },
      { name: "Dart", icon: SiDart },
    ],
    frameworks: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: FaAngular },
      { name: "Node.js", icon: FaNodeJs },
      { name: "React Native", icon: FaReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "Firebase", icon: SiFirebase },
      { name: "ASP.NET", icon: SiDotnet },
      { name: "SwiftUI", icon: FaSwift },
    ],
    cloudDevOps: [
      { name: "Linux", icon: FaLinux },
      { name: "AWS", icon: FaAws },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Docker", icon: FaDocker },
      { name: "Terraform", icon: SiTerraform },
    ],
    databases: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "AWS S3", icon: FaAws },
      { name: "Firestore", icon: SiFirebase },
    ],
    dataScience: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Sci-kit Learn", icon: SiScikitlearn },
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "OpenCV", icon: SiOpencv },
    ],
    tools: [
      { name: "Git", icon: FaGitAlt },
      { name: "VS Code", icon: SiVisualstudio },
      { name: "XCode", icon: SiXcode },
      { name: "Jupyter", icon: SiJupyter },
      { name: "RStudio", icon: SiR },
    ],
  };

  return (
    <Box py={[8, 12, 16]} px={[6, 8, 12]}>
      <Heading
        as="h2"
        size="xl"
        textAlign="center"
        mb={[6, 8, 10]}
        pb={[4, 6, 8]}
      >
        Technologies that I have worked with
      </Heading>
      <SimpleGrid columns={[1, 2]} spacingY={25} spacingX={55}>
        <TechnologySection
          title="Languages"
          technologies={technologies.languages}
        />
        <TechnologySection
          title="Frameworks & Libraries"
          technologies={technologies.frameworks}
        />
        <TechnologySection
          title="Cloud & DevOps"
          technologies={technologies.cloudDevOps}
        />
        <TechnologySection
          title="Databases"
          technologies={technologies.databases}
        />
        <TechnologySection
          title="Data Science & ML"
          technologies={technologies.dataScience}
        />
        <TechnologySection title="Tools" technologies={technologies.tools} />
      </SimpleGrid>
    </Box>
  );
};

export default Technologies;
