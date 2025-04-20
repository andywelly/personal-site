// data/timelineData.tsx
import { School, Work, VolunteerActivism, CardMembership, Computer, SportsBasketball } from '@mui/icons-material';
import { SvgIconComponent } from '@mui/icons-material';

export interface TimelineEntryData {
  side: 'left' | 'right';
  icon: SvgIconComponent;
  iconColor: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  imageSrc: string;
  imageAlt: string;
  title: string;
  organization?: string;
  period?: string;
  description?: string;
  bulletPoints?: string[];
}

const timelineData: TimelineEntryData[] = [
  {
    side: 'right',
    icon: School,
    iconColor: 'primary',
    imageSrc: '/graduation.jpeg',
    imageAlt: 'University of Melbourne',
    title: 'Bachelor of Science in Computing and Software Systems',
    organization: 'University of Melbourne',
    period: 'Feb 2022 - Nov 2024',
    description: 'Graduated with Division A Second Class Honours. \nBuilt a solid foundation in software engineering methodologies, problem-solving, and critical thinking through hands-on projects and collaborative coursework'
  },
  {
    side: 'left',
    icon: Computer,
    iconColor: 'info',
    imageSrc: '/langwarrin_timeline.png',
    imageAlt: 'Langwarrin Community Centre',
    title: 'Software Development Client Work',
    organization: 'Langwarrin Community Centre',
    period: 'Jul 2024 – Nov 2024',
    description: 'Led a team of 5 to successfully deliver a user-friendly full-stack web application (ReactJS, CSS, PostgreSQL, Strapi) to clients. Focused on seamless data integration (RESTful APIs) and efficient deployments (CI/CD pipelines), while promoting effective teamwork using Git, Jira, and Confluence.'
  },
  {
    side: 'right',
    icon: Work,
    iconColor: 'secondary',
    imageSrc: '/coles.jpeg',
    imageAlt: 'Coles Group',
    title: 'Grocery Fill Lead',
    organization: 'Coles Group',
    period: 'Jan 2022 – Present',
    description: 'Developed strong leadership, problem-solving, and organisational skills through coordinating team activities, managing stock levels, and communicating with suppliers. Successfully trained new employees and resolved logistical issues, contributing to improved operational efficiency and reduced errors.'
  },
  {
    side: 'left',
    icon: VolunteerActivism,
    iconColor: 'success',
    imageSrc: '/project_juan.jpeg',
    imageAlt: 'Project Juan Charity',
    title: 'Distribution Coordinator',
    organization: 'Project Juan Charity',
    period: 'Jun 2021 – Present',
    description: 'Made a significant community impact by coordinating disaster relief for over 180 families, organising the distribution of vital resources, and raising over $5,000 to support local projects.'
  },
  {
    side: 'right',
    icon: CardMembership,
    iconColor: 'warning',
    imageSrc: '/aws.png',
    imageAlt: 'Certifications',
    title: 'Certifications and Awards',
    bulletPoints: [
      'AWS Certified Cloud Practitioner (Issued Feb 2024)',
      'Google Foundations of Cybersecurity (Issued Jan 2025)',
      'INFO30006 Exemplar for Research on AI-Generated Content',
      'Outstanding Leadership and Team Collaboration Award, Coles Group',
      'Pursuing ISC2 Certified in Cybersecurity (CC)'
    ]
  },
  {
    side: 'left',
    icon: SportsBasketball,
    iconColor: 'warning',
    imageSrc: '/basketball.jpeg',
    imageAlt: 'basketball team',
    title: 'Hobbies and Interests',
    bulletPoints: [
      'I play multiple sports, including basketball, tennis, swimming and rockclimbing',
      'Music is one of my passions, I can play proficiently nearly a dozen instruments',
      'I love cooking and exploring new foods'
    ]
  }
];

export default timelineData;