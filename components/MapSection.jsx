export default function MapSection() {
    return (
        <section className="w-full h-[450px] bg-gray-100">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.6623755000983!2d55.773356475350525!3d24.218601478353882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab7f0e640ff95%3A0x8862a93e1168475b!2sMirabel%20Beauty%20Center%20Al%20Ain!5e0!3m2!1sen!2sae!4v1764505842447!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mirabel Beauty Centre Location"
            ></iframe>
        </section>
    );
}
