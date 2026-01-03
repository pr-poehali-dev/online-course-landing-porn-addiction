import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://t.me/valerasabrekov', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Путь к свободе от зависимости
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Практическая программа для тех, кто готов изменить свою жизнь
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Записаться на курс
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Подробнее о курсе
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">О курсе</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Программа, которая поможет вернуть контроль над своей жизнью
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8 space-y-4">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Target" size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-center">Индивидуальный подход</h3>
                <p className="text-muted-foreground text-center">
                  Программа адаптируется под ваши личные потребности и особенности
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8 space-y-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Brain" size={28} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-center">Проверенные методики</h3>
                <p className="text-muted-foreground text-center">
                  То, что работает на практике, без сложных теорий
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Users" size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center">Постоянная поддержка</h3>
                <p className="text-muted-foreground text-center">
                  Вы не останетесь один на один с проблемой
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="problem" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Почему это важно</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Зависимость — это не слабость характера. Это привычка, которая закрепилась в мозге. 
                И её можно изменить, если знать как.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="AlertCircle" size={16} className="text-destructive" />
                  </div>
                  <p className="text-muted-foreground">Снижение качества личных отношений</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="AlertCircle" size={16} className="text-destructive" />
                  </div>
                  <p className="text-muted-foreground">Потеря продуктивности и мотивации</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="AlertCircle" size={16} className="text-destructive" />
                  </div>
                  <p className="text-muted-foreground">Психологический дискомфорт и тревожность</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="AlertCircle" size={16} className="text-destructive" />
                  </div>
                  <p className="text-muted-foreground">Чувство стыда и изоляция</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-muted to-muted/50 p-8 rounded-lg border-2 border-border">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Конфиденциальность</p>
                    <p className="text-sm text-muted-foreground">100% анонимность гарантирована</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Award" size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Работающие методы</p>
                    <p className="text-sm text-muted-foreground">Проверенные на практике подходы</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle2" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Реальные результаты</p>
                    <p className="text-sm text-muted-foreground">Большинство участников добиваются успеха</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как это работает</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Простая и понятная программа, основанная на том, что действительно помогает людям меняться
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Lightbulb" size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Работа с мышлением</h3>
                </div>
                <p className="text-muted-foreground">
                  Учимся замечать и менять мысли, которые ведут к срывам
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Heart" size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Управление эмоциями</h3>
                </div>
                <p className="text-muted-foreground">
                  Находим здоровые способы справляться со стрессом и тревогой
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Перестройка привычек</h3>
                </div>
                <p className="text-muted-foreground">
                  Мозг можно "переучить" — создаём новые, здоровые привычки
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Новый образ жизни</h3>
                </div>
                <p className="text-muted-foreground">
                  Шаг за шагом заменяем вредные привычки на полезные
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Программа курса</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              7 недель пошаговой работы — каждую неделю новые знания и практика
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-8 pb-8 border-l-2 border-accent">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background"></div>
              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">Модуль 1: Осознание и принятие</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Неделя 1</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Понимание природы зависимости, нейробиология привычек, первичная самодиагностика
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Оценка состояния</span>
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Дневник триггеров</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-secondary">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-secondary rounded-full border-4 border-background"></div>
              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">Модуль 2: Выявление триггеров</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Неделя 2</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Картирование ситуаций и эмоций, которые запускают паттерн, создание плана избегания
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">Анализ триггеров</span>
                    <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">Карта рисков</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-primary">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">Модуль 3: Техники саморегуляции</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Неделя 3</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Дыхательные практики, медитация осознанности, методы экстренной остановки импульсов
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Медитация</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Дыхание</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-accent">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background"></div>
              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">Модуль 4: Когнитивная перестройка</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Неделя 4</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    CBT-техники для изменения негативных убеждений и автоматических мыслей
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">CBT упражнения</span>
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Журналинг</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-secondary">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-secondary rounded-full border-4 border-background"></div>
              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">Модуль 5: Построение новых привычек</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Неделя 5</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Замена деструктивных паттернов на здоровые активности, спорт, хобби, социальные связи
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">План активностей</span>
                    <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">Трекер привычек</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-primary">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">Модуль 6: Работа с ценностями</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Неделя 6</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    ACT-терапия принятия, определение жизненных приоритетов, выстраивание смыслов
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Ценностные упражнения</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Визуализация будущего</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background"></div>
              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">Модуль 7: Профилактика рецидивов</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Неделя 7</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Создание долгосрочного плана поддержки, стратегии в кризисных ситуациях, подведение итогов
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">План действий</span>
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Кризисная карта</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Формат обучения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полностью текстовый формат для максимального удобства и конфиденциальности
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="pt-8 space-y-4">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="FileText" size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-center">Текстовые материалы</h3>
                <p className="text-muted-foreground text-center">
                  Подробные статьи и руководства с научным обоснованием, которые можно изучать в удобном темпе
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-8 space-y-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="BookOpen" size={28} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-center">Практические задания</h3>
                <p className="text-muted-foreground text-center">
                  Еженедельные упражнения и техники для закрепления навыков в реальной жизни
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-gradient-to-r from-accent/10 via-secondary/10 to-primary/10 p-8 rounded-lg border-2">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Пожизненная поддержка</h3>
              <p className="text-muted-foreground mb-6">
                После завершения основной программы вы получаете постоянный доступ к материалам курса и возможность консультироваться со специалистами
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center gap-3">
                  <Icon name="Check" size={24} className="text-accent" />
                  <span className="text-center">Доступ к обновлениям программы</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Icon name="Check" size={24} className="text-accent" />
                  <span className="text-center">Консультации по email</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Icon name="Check" size={24} className="text-accent" />
                  <span className="text-center">Дополнительные материалы</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Запись на курс</h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и мы свяжемся с вами для обсуждения деталей. Все данные конфиденциальны.
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Иван"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Ваше сообщение (необязательно)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите немного о себе и ваших целях..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-2 min-h-32"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                >
                  Связаться в Telegram
                  <Icon name="MessageCircle" size={20} className="ml-2" />
                </Button>

                <p className="text-sm text-muted-foreground text-center pt-4">
                  <Icon name="Lock" size={16} className="inline mr-1" />
                  Ваши данные защищены и не будут переданы третьим лицам
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">О программе</h3>
              <p className="text-primary-foreground/80 text-sm">
                Профессиональная программа избавления от порнозависимости, основанная на научных методиках и многолетнем опыте
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Контакты</h3>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>Email: sabrekov86.86@mail.ru</p>
                <a 
                  href="https://t.me/valerasabrekov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                >
                  <Icon name="MessageCircle" size={16} />
                  <span>Telegram: @valerasabrekov</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Политика конфиденциальности</h3>
              <p className="text-primary-foreground/80 text-sm mb-3">
                Мы гарантируем полную анонимность и защиту ваших персональных данных согласно законодательству РФ
              </p>
              <a href="#" className="text-primary-foreground/80 text-sm underline hover:text-primary-foreground">
                Подробнее о политике конфиденциальности
              </a>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 Программа восстановления. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={24} />
        </Button>
      )}
    </div>
  );
};

export default Index;