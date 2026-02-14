import { Instagram, Mail } from 'lucide-react';

const Portfolio = () => {
  const data = {
    name: "Ravi Mahar",
    role: "Computer Instructor",
    description: "I am Ravi Mahar, a dedicated Computer Instructor at Govt. Sr. Sec. School Kikarwali. With a deep passion for technology and digital literacy, I specialize in simplifying complex computing concepts for the next generation. My mission is to empower students with the technical skills and logical thinking necessary to thrive in an increasingly digital world.",
    imageUrl: "src/assets/unnamed.jpg",
    socials: [
      { name: 'Instagram', icon: <Instagram/>, url: 'https://instagram.com/ravimahar5695' },
      { name: 'Email', icon: <Mail/>, url: 'mailto: ravimahar5695@gmail.com' }
    ]
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img 
          src={data.imageUrl} 
          alt={data.name} 
          style={styles.image} 
        />
        <h1 style={styles.name}>{data.name}</h1>
        <h2 style={styles.role}>{data.role}</h2>
        <p style={styles.description}>{data.description}</p>
        
        <div style={styles.socialLinks}>
          {data.socials.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.icon}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f9',
    fontFamily: "'Inter', sans-serif",
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
    border: '4px solid #646cff',
  },
  name: {
    fontSize: '2rem',
    margin: '10px 0',
    color: '#2d3436',
  },
  role: {
    fontSize: '1.1rem',
    color: '#646cff',
    fontWeight: '600',
    marginBottom: '15px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  description: {
    color: '#636e72',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  icon: {
    color: '#2d3436',
    transition: 'transform 0.2s, color 0.2s',
    cursor: 'pointer',
  }
};

export default Portfolio;