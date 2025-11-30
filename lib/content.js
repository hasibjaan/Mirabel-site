// Centralized content for Mirabel Beauty Salon

export const heroContent = {
    slides: [
        {
            type: 'image',
            src: '/images/hero-1.jpg',
            alt: 'Elegant beauty salon interior',
            title: 'Mirabel Beauty Centre',
            subtitle: 'Where beauty meets elegance. Experience luxury treatments in a serene, modern atmosphere.'
        },
        {
            type: 'image',
            src: '/images/hero-2.jpg',
            alt: 'Professional beauty treatment',
            title: 'Expert Care & Styling',
            subtitle: 'Our professional stylists are dedicated to bringing out your inner radiance with personalized care.'
        },
        {
            type: 'image',
            src: '/images/hero-3.jpg',
            alt: 'Relaxing spa environment',
            title: 'A Sanctuary of Peace',
            subtitle: 'Escape the daily rush and immerse yourself in a world of tranquility and rejuvenation.'
        }
    ],
    buttons: {
        bookNow: 'Book Now',
        learnMore: 'Learn More'
    }
};

export const headerContent = {
    brandName: 'Mirabel',
    navLinks: [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Stories', href: '#stories' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ],
    bookButton: 'Book Now'
};

export const servicesContent = {
    title: 'Our Services',
    subtitle: 'Indulge in our range of premium beauty treatments',
    services: [
        {
            name: 'Hair Styling',
            price: 'From $65',
            description: 'Cuts, colors, and treatments tailored to you',
            details: 'Experience a complete hair transformation with our expert stylists. Whether you need a precision cut, vibrant color, or a nourishing treatment, we tailor every service to your unique hair type and style preferences. Includes a relaxing wash and professional blow-dry finish.',
            image: '/images/hair.jpg'
        },
        {
            name: 'Makeup Artistry',
            price: 'From $85',
            description: 'Flawless looks for any occasion',
            details: 'Get ready to shine with our professional makeup artistry. From natural "no-makeup" looks to glamorous evening styles and bridal perfection, we use premium, long-lasting products to enhance your features and ensure you look stunning for any event.',
            image: '/images/makeup.jpg'
        },
        {
            name: 'Nail Care',
            price: 'From $45',
            description: 'Manicures and pedicures with luxury polish',
            details: 'Treat your hands and feet to our luxurious nail care services. Our manicures and pedicures include cuticle care, exfoliation, massage, and your choice of high-quality polish or gel. Relax in our comfortable chairs while we perfect your nails.',
            image: '/images/nails.jpg'
        },
        {
            name: 'Facials',
            price: 'From $95',
            description: 'Rejuvenating skincare treatments',
            details: 'Revitalize your skin with our customized facial treatments. We analyze your skin type to provide deep cleansing, exfoliation, and hydration. Our facials target specific concerns like anti-aging, acne, or dullness, leaving your skin glowing and refreshed.',
            image: '/images/facial.jpg'
        },
        {
            name: 'Lash Extensions',
            price: 'From $120',
            description: 'Beautiful, natural-looking lashes',
            details: 'Enhance your eyes with our premium lash extensions. Choose from classic, hybrid, or volume sets to achieve your desired look. Our technicians apply individual lashes with precision for a comfortable, natural-feeling, and long-lasting result.',
            image: '/images/lash.jpg'
        },
        {
            name: 'Bridal Services',
            price: 'Custom',
            description: 'Complete packages for your special day',
            details: 'Make your wedding day unforgettable with our comprehensive bridal beauty packages. We offer trials and day-of services for hair, makeup, and nails for the bride and bridal party. Let us handle the beauty details so you can focus on your special moment.',
            image: '/images/bridal.jpg'
        },
    ],
    testimonials: [
        { text: 'Amazing service! Highly recommend!', name: 'Sarah Johnson' },
        { text: 'Best experience ever! Will definitely return.', name: 'Emily Chen' },
        { text: 'Professional and friendly staff. Love my results!', name: 'Jessica Martinez' },
        { text: 'Exceeded all my expectations. Thank you!', name: 'Maria Rodriguez' }
    ],
    bookButton: 'Book This Service'
};

export const aboutContent = {
    title: 'About Mirabel',
    paragraphs: [
        'Founded in 2015, Mirabel Beauty Salon has been dedicated to bringing out the natural beauty in every client. Our team of experienced professionals combines artistry with the latest techniques to deliver exceptional results.',
        'We believe that beauty is more than skin deep. It\'s about confidence, self-expression, and feeling your absolute best. That\'s why we create a welcoming, luxurious environment where you can relax and enjoy a moment of self-care.'
    ],
    stats: [
        { value: 10, label: 'Years Experience' },
        { value: 15, label: 'Expert Staff' },
        { value: 5000, label: 'Happy Clients' }
    ],
    images: [
        { src: '/images/about-1.jpeg', alt: 'Salon interior showcasing luxury beauty services' },
        { src: '/images/about-2.jpg', alt: 'Expert stylists at work' },
        { src: '/images/about-3.jpeg', alt: 'Beautiful salon results and client experience' }
    ]
};

export const storiesContent = {
    label: 'Discover',
    title: 'Our beautiful stories',
    description: 'At Mirabel, we believe beauty is a journey of self-discovery and empowerment. Every story we create is a celebration of individuality, confidence, and the transformative power of self-care. Join us in crafting moments that reflect your unique essence and inner radiance.',
    stories: [
        { id: 1, title: 'Our latest news', image: '/images/story-1.jpg', alt: 'Beauty and hair styling showcase' },
        { id: 2, title: 'De toutes beautés', image: '/images/story-2.jpg', alt: 'Collage of beauty products and diversity' },
        { id: 3, title: 'Essentiality of Beauty', image: '/images/story-3.jpg', alt: 'Diverse group of women celebrating beauty' },
        { id: 4, title: 'Beauty Transformation', image: '/images/story-4.jpg', alt: 'Before and after beauty transformations' },
        { id: 5, title: 'Luxury Experience', image: '/images/story-5.jpg', alt: 'Luxury salon experience and treatments' },
        { id: 6, title: 'Client Stories', image: '/images/story-6.jpg', alt: 'Client success stories and testimonials' }
    ]
};

export const testimonialsContent = {
    title: 'What Our Clients Say',
    subtitle: 'Don\'t just take our word for it',
    testimonials: [
        {
            name: 'Sarah Johnson',
            text: 'Mirabel is absolutely amazing! The staff is so professional and my hair has never looked better. I always leave feeling like a million bucks!',
            rating: 5
        },
        {
            name: 'Emily Chen',
            text: 'Best beauty salon experience ever! The atmosphere is so relaxing and luxurious. My makeup for my wedding was flawless. Highly recommend!',
            rating: 5
        },
        {
            name: 'Jessica Martinez',
            text: 'I\'ve been coming to Mirabel for over a year now and I wouldn\'t go anywhere else. The quality of service is unmatched and the prices are fair.',
            rating: 5
        }
    ]
};

export const contactContent = {
    title: 'Get In Touch',
    subtitle: 'We\'d love to help you look and feel your best',
    info: {
        location: {
            title: 'Location',
            lines: [
                'Near Muraba Lulu Centre',
                'Welcome Trade Building floor no 2'
            ]
        },
        hours: {
            title: 'Hours',
            text: 'Mon - Fri: 9:00 AM - 7:00 PM\nSat: 10:00 AM - 6:00 PM\nSun: Closed'
        },
        phone: {
            title: 'Phone',
            value: '+971 50 535 0637'
        },
        email: {
            title: 'Email',
            value: 'Mirabelbc@gmail.com'
        }
    },
    form: {
        title: 'Send us a message',
        namePlaceholder: 'Your Name',
        emailPlaceholder: 'Your Email',
        phonePlaceholder: 'Your Phone',
        messagePlaceholder: 'Your Message',
        submitButton: 'Send Message',
        successMessage: 'Thank you for your message! We will get back to you soon.'
    }
};

export const footerContent = {
    brandName: 'Mirabel',
    tagline: 'Your destination for beauty and elegance. We\'re dedicated to making you look and feel amazing.',
    quickLinks: {
        title: 'Quick Links',
        links: [
            { name: 'Home', href: '#home' },
            { name: 'Services', href: '#services' },
            { name: 'About', href: '#about' },
            { name: 'Testimonials', href: '#testimonials' }
        ]
    },
    social: {
        title: 'Connect With Us',
        instagram: 'https://www.instagram.com/mirabel_alain?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        facebook: 'https://www.facebook.com/mirabelalain',
        snapchat: '#',
        tiktok: '#',
        twitter: '#',
        youtube: '#',
        pinterest: '#'
    },
    contact: {
        email: 'Mirabelbc@gmail.com',
        phone: '+971 50 535 0637'
    },
    copyright: '© 2024 Mirabel Beauty Salon. All rights reserved.'
};
