import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import { fadeUp } from '../../utils/animations';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center py-20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center max-w-lg mx-auto"
        >
          <p className="text-8xl font-bold text-primary/20 mb-4">404</p>
          <h1 className="text-3xl font-bold text-dark mb-4">Page Not Found</h1>
          <p className="text-muted mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex gap-4 justify-center">
            <Button to="/" variant="primary">Go Home</Button>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 text-primary font-medium hover:underline">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
