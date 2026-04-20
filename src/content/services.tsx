import { useState, useEffect } from 'react';

// هذا السطر يخبر Vite أن يراقب أي ملفات JSON تظهر في مجلد content/services
const serviceFiles = import.meta.glob('/src/content/services/*.json', { eager: true });

export default function Services() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    // تجميع البيانات من الملفات لعرضها في الموقع
    const loadedServices = Object.values(serviceFiles).map((file: any) => file.default || file);
    setServices(loadedServices);
  }, []);

  // إذا لم تضف خدمات بعد في لوحة التحكم، سيظهر لك تنبيه بسيط
  if (services.length === 0) {
    return (
      <section className="py-20 bg-black text-white text-center" id="services">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400">Please add services from the Admin panel.</p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-black text-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-white/10 rounded-lg bg-[#111111] hover:border-red-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-red-600 font-bold text-xl mb-4">{service.price}</p>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}