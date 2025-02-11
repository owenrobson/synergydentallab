"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building2,
  Clock,
  HeartPulse,
  Microscope,
  Phone,
  Shield,
  Stethoscope,
  Palette,
  FileText,
  Package,
  Brain,
  Box,
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[800px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 pt-20 md:pt-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Advanced Dental Technology Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Revolutionising dental care with cutting-edge technology and
            innovation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Schedule Demo</Button>
            <Button
              variant="outline"
              size="lg"
              className="text-black hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section id="products" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Products
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Dental Implants",
                image:
                  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80",
                href: "#dental-implants",
              },
              {
                title: "CAD / CAM",
                image:
                  "https://media.3shape.com.imgeng.in/-/media/corporate/blog/images/digital-dentistry/dental-software/software.jpg?v=87da1cc9-8801-4b13-86d8-9f274bd87a35",
                href: "#cad-cam",
              },
              {
                title: "Restorations",
                image:
                  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80",
                href: "#restorations",
              },
            ].map((product, index) => (
              <a
                key={index}
                href={product.href}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] block"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex items-end">
                  <h3 className="text-white text-xl font-semibold p-6 transform transition-transform duration-300 group-hover:translate-y-[-0.5rem]">
                    {product.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <Palette className="h-8 w-8 mb-4" />,
                title: "Shade Taking",
                description:
                  "Precise color matching for natural-looking results",
              },
              {
                icon: <FileText className="h-8 w-8 mb-4" />,
                title: "Lab Sheet",
                description: "Detailed documentation for accurate processing",
              },
              {
                icon: <Package className="h-8 w-8 mb-4" />,
                title: "Post Delivery Options",
                description: "Flexible solutions for after-care service",
              },
              {
                icon: <Brain className="h-8 w-8 mb-4" />,
                title: "Treatment Planning",
                description: "Comprehensive care strategy development",
              },
              {
                icon: <Box className="h-8 w-8 mb-4" />,
                title: "Pack Request",
                description: "Streamlined material ordering system",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Partners
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {[
                "/synergydentallab/images/partners/synergy.png",
                "/synergydentallab/images/partners/synergy.png",
                "/synergydentallab/images/partners/synergy.png",
                "/synergydentallab/images/partners/synergy.png",
                "/synergydentallab/images/partners/synergy.png",
              ].map((partner, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="p-4">
                    <div className="rounded-lg overflow-hidden bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src={partner}
                        alt={`Partner ${index + 1}`}
                        className="w-full h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Choose Our Technology
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Microscope className="h-8 w-8 mb-4 text-primary" />,
                title: "Precision Imaging",
                description:
                  "High-resolution 3D imaging for accurate diagnostics",
              },
              {
                icon: <Shield className="h-8 w-8 mb-4 text-primary" />,
                title: "Patient Safety",
                description:
                  "Advanced safety protocols and radiation reduction",
              },
              {
                icon: <HeartPulse className="h-8 w-8 mb-4 text-primary" />,
                title: "Better Outcomes",
                description: "Improved treatment planning and patient care",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="solutions" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Solutions
          </h2>
          <Tabs defaultValue="implants" className="w-full">
            <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto mb-8">
              <TabsTrigger value="implants">Dental Implants</TabsTrigger>
              <TabsTrigger value="cad">CAD/CAM</TabsTrigger>
            </TabsList>
            <TabsContent value="implants">
              <div className="grid md:grid-cols-2 gap-8">
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80"
                  alt="Dental Implants"
                  className="rounded-lg object-cover h-[300px] md:h-[400px] w-full"
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    Advanced Dental Implant Solutions
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our state-of-the-art dental implant solutions provide
                    permanent, natural-looking tooth replacements that restore
                    both function and confidence.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Computer-guided implant placement",
                      "Custom abutment design",
                      "Immediate load implants",
                      "Full-arch rehabilitation",
                      "Advanced bone grafting options",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="cad">
              <div className="grid md:grid-cols-2 gap-8">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
                  alt="CAD/CAM System"
                  className="rounded-lg object-cover h-[300px] md:h-[400px] w-full"
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    CAD/CAM Technology
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Create precise dental restorations in-house with our
                    state-of-the-art CAD/CAM systems.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Same-day restorations",
                      "High precision milling",
                      "Wide material compatibility",
                      "User-friendly interface",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="mb-8">
                Learn how our dental technology solutions can transform your
                practice.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>029 2047 2672</span>
                </div>
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 mr-2" />
                  <span>23 The Parade, Cardiff CF24 3AB</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Monday - Friday: 08:00 - 16:00</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Name"
                            className="text-gray-900"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email"
                            className="text-gray-900"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Message"
                            className="text-gray-900"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
