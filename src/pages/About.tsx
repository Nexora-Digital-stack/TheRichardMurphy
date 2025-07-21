import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Award, Heart, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Murphy's
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting exceptional leather footwear since 1952, where tradition meets modern elegance
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded by Richard Murphy in Dublin, our family business has been dedicated to creating 
                the finest leather shoes for over seven decades. What started as a small workshop has 
                grown into a renowned destination for discerning customers who appreciate quality craftsmanship.
              </p>
              <p className="text-muted-foreground mb-6">
                Every pair of shoes tells a story of meticulous attention to detail, from the selection 
                of premium leather to the final hand-finishing touches. We believe that great shoes are 
                not just worn, but experienced.
              </p>
              <Button variant="outline" size="lg">
                Visit Our Workshop
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop" 
                alt="Murphy's workshop interior"
                className="rounded-lg shadow-elegant w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-16" />

      {/* Values Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-accent">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  Only the finest materials and time-tested techniques
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-accent">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Passion</h3>
                <p className="text-muted-foreground">
                  Every shoe is crafted with love and dedication
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-accent">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Heritage</h3>
                <p className="text-muted-foreground">
                  Three generations of shoemaking expertise
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-accent">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Timeless</h3>
                <p className="text-muted-foreground">
                  Designs that transcend trends and seasons
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="py-16 bg-accent/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">A Legacy of Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            From our humble beginnings to becoming Ireland's premier leather shoe destination, 
            Murphy's continues to honor the craftsmanship traditions while embracing innovation 
            that enhances comfort and durability.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">70+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Handcrafted Quality</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;