import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/layout/container";
import { testimonials } from "@/data/testimonials";
import { TestimonialCarousel } from "@/features/testimonials/testimonial-carousel";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-(--spacing-section)">
      <Container className="max-w-2xl">
        <Reveal>
          <p className="text-accent-blue mb-3 text-center font-mono text-sm tracking-wide uppercase">
            Testimonials
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            What people say
          </h2>
        </Reveal>

        <div className="mt-14">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </Container>
    </section>
  );
}
