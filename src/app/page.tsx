"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Coffee, Globe, Leaf, Recycle, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="medium"
        background="blurBottom"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "About",          id: "about"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Cuppio Coffee"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars"}}
      title="Experience Artisanal Perfection"
      description="At Cuppio, we source only the finest beans to craft coffee that warms your soul and awakens your spirit."
      buttons={[
        {
          text: "Shop Now",          href: "#menu"
        }
      ]}
      kpis={[
        {
          value: "12+",          label: "Origin Sourced"},
        {
          value: "5k+",          label: "Cups Served"},
        {
          value: "99%",          label: "Satisfaction"},
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-hand-pouring-milk-cup_23-2148865583.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/barista-preparing-beverage_23-2149458092.jpg",          alt: "Barista preparing beverage"},
        {
          src: "http://img.b2bpic.net/free-photo/barista-making-cappuccino_1150-8043.jpg",          alt: "Barista making cappuccino."},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-hands-preparing-drink-with-milk_23-2148865605.jpg",          alt: "Close-up hands preparing drink with milk"},
        {
          src: "http://img.b2bpic.net/free-photo/barista-is-preparing-coffee-with-milk_140725-8113.jpg",          alt: "Barista is preparing coffee with milk"},
        {
          src: "http://img.b2bpic.net/free-photo/barista-preparing-beverage_23-2149458072.jpg",          alt: "Barista preparing beverage"},
      ]}
      avatarText="Join 5,000+ coffee enthusiasts"
      marqueeItems={[
        {
          type: "text-icon",          text: "Ethically Sourced",          icon: Leaf,
        },
        {
          type: "text-icon",          text: "Small-Batch Roasts",          icon: Coffee,
        },
        {
          type: "text-icon",          text: "Expertly Crafted",          icon: Award,
        },
        {
          type: "text-icon",          text: "Carbon Neutral",          icon: Recycle,
        },
        {
          type: "text-icon",          text: "Global Partners",          icon: Globe,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Our Passion for Brewing Excellence"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "V60 Dripper",          price: "$25",          variant: "Ceramic",          imageSrc: "http://img.b2bpic.net/free-photo/female-barista-holding-coffee-filter-jug_23-2148824462.jpg"},
        {
          id: "p2",          name: "French Press",          price: "$45",          variant: "Steel",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-ready-be-served-coffee-with-sugar_23-2148464004.jpg"},
        {
          id: "p3",          name: "Handmade Mug",          price: "$18",          variant: "Stoneware",          imageSrc: "http://img.b2bpic.net/free-photo/handmade-cup-books-closeup-wooden-surface-copy-space_169016-46354.jpg"},
        {
          id: "p4",          name: "Ethiopian Blend",          price: "$22",          variant: "250g",          imageSrc: "http://img.b2bpic.net/free-photo/coffee-beans-container_23-2148173321.jpg"},
        {
          id: "p5",          name: "Burr Grinder",          price: "$120",          variant: "Professional",          imageSrc: "http://img.b2bpic.net/free-photo/coffee-pot-cup_23-2147693944.jpg"},
        {
          id: "p6",          name: "Wooden Scoop",          price: "$12",          variant: "Walnut",          imageSrc: "http://img.b2bpic.net/free-photo/tool-used-coffee-machine-coffee-making-process_23-2150187518.jpg"},
      ]}
      title="Our Signature Selection"
      description="Hand-picked equipment and beans to elevate your home brewing ritual."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          badge: "Weekly",          price: "$15/mo",          subtitle: "For daily coffee lovers",          features: [
            "Fresh Roast",            "Standard Shipping"],
          buttons: [
            {
              text: "Select Plan"},
          ],
        },
        {
          id: "pro",          badge: "Monthly",          price: "$40/mo",          subtitle: "Curated selection",          features: [
            "Exotic Beans",            "Priority Shipping",            "Brew Guide"],
          buttons: [
            {
              text: "Select Plan"},
          ],
        },
        {
          id: "master",          badge: "Annual",          price: "$400/yr",          subtitle: "Complete experience",          features: [
            "Limited Batches",            "Exclusive Gadgets",            "Free Shipping"],
          buttons: [
            {
              text: "Select Plan"},
          ],
        },
      ]}
      title="Subscription Plans"
      description="Choose your frequency and get fresh beans delivered right to your door."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Alice M.",          role: "Designer",          company: "Studio",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-fairskinned-adult-woman-smiling-looking-camera-while-drinking-coffee-morning-standing-by-window-concept-rest-recovery_197531-31124.jpg"},
        {
          id: "t2",          name: "Bob K.",          role: "Engineer",          company: "Tech",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-bearded-man-earphones_171337-4772.jpg"},
        {
          id: "t3",          name: "Chloe L.",          role: "Writer",          company: "Media",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-women-reading-menu-cafe_23-2147785423.jpg"},
        {
          id: "t4",          name: "David S.",          role: "Manager",          company: "Retail",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/transparent-word-coffee-background-coffee-beans-mockup-advertising_169016-53812.jpg"},
        {
          id: "t5",          name: "Elena R.",          role: "Architect",          company: "Build",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/waitress-serving-cup-coffee-customers_1170-652.jpg"},
      ]}
      title="Customer Stories"
      description="We are proud to serve our community of coffee lovers."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          icon: Coffee,
          title: "Roasts",          value: "150"},
        {
          id: "m2",          icon: Users,
          title: "Farmers",          value: "20"},
        {
          id: "m3",          icon: Leaf,
          title: "Bio-degradable",          value: "100%"},
      ]}
      title="Our Impact"
      description="Quality meets sustainability at every step of our process."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "How is coffee sourced?",          content: "Ethically and directly from partner farms."},
        {
          id: "f2",          title: "Can I cancel my subscription?",          content: "Yes, you can pause or cancel anytime."},
        {
          id: "f3",          title: "Shipping times?",          content: "3-5 business days for standard orders."},
      ]}
      sideTitle="Common Questions"
      sideDescription="Everything you need to know about our beans and brewing gear."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Newsletter"
      title="Stay Connected"
      description="Sign up for coffee tips and roast updates."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Cuppio"
      columns={[
        {
          title: "Shop",          items: [
            {
              label: "Beans",              href: "#menu"},
            {
              label: "Gear",              href: "#menu"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About",              href: "#about"},
            {
              label: "FAQ",              href: "#faq"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
