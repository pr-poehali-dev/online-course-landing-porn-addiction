import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
              Научно обоснованная программа избавления от порнозависимости под руководством профессионалов
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
              Комплексная программа восстановления, основанная на современных психотерапевтических методиках
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
                <h3 className="text-xl font-semibold text-center">Научный подход</h3>
                <p className="text-muted-foreground text-center">
                  Методики основаны на доказательной психотерапии и нейробиологии
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Users" size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center">Поддержка 24/7</h3>
                <p className="text-muted-foreground text-center">
                  Доступ к сообществу и специалистам в любое время
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
              <h2 className="text-3xl md:text-4xl font-bold">Проблема требует решения</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Порнозависимость — это не вопрос силы воли. Это нейробиологическая проблема, 
                которая влияет на дофаминовую систему мозга, создавая устойчивые паттерны поведения.
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
                    <p className="font-semibold text-lg">Проверенные методики</p>
                    <p className="text-sm text-muted-foreground">Основаны на CBT и ACT терапии</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle2" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Результат</p>
                    <p className="text-sm text-muted-foreground">87% участников достигают целей</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Научно обоснованное решение</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Мы используем комплексный подход, сочетающий когнитивно-поведенческую терапию, 
              практики осознанности и нейробиологические техники
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Lightbulb" size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Когнитивная перестройка</h3>
                </div>
                <p className="text-muted-foreground">
                  Изменение негативных мыслительных паттернов и триггеров через структурированные упражнения CBT
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Heart" size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Эмоциональная регуляция</h3>
                </div>
                <p className="text-muted-foreground">
                  Развитие навыков управления стрессом, тревогой и эмоциональными состояниями без деструктивных привычек
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Нейропластичность</h3>
                </div>
                <p className="text-muted-foreground">
                  Техники для перепрограммирования дофаминовой системы и создания здоровых нейронных связей
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Построение новых привычек</h3>
                </div>
                <p className="text-muted-foreground">
                  Пошаговая система замены деструктивных паттернов на продуктивные и здоровые альтернативы
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
              Структурированный путь длительностью 12 недель с еженедельными модулями и практическими заданиями
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-8 pb-8 border-l-2 border-accent">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background"></div>
              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">Модуль 1-3: Понимание проблемы</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Недели 1-3</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Нейробиология зависимости, выявление триггеров, осознанность и самонаблюдение
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Дневник триггеров</span>
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Медитация</span>
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Оценка состояния</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-secondary">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-secondary rounded-full border-4 border-background"></div>
              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">Модуль 4-7: Развитие навыков</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Недели 4-7</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Техники саморегуляции, работа с эмоциями, когнитивная реструктуризация, управление стрессом
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">CBT упражнения</span>
                    <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">Дыхательные практики</span>
                    <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">Журналинг</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative pl-8 pb-8 border-l-2 border-primary">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">Модуль 8-10: Глубокая трансформация</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Недели 8-10</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Работа с глубинными убеждениями, выстраивание здоровых отношений, поиск смысла и ценностей
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Терапия принятия</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Ценностные упражнения</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Групповая работа</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative pl-8">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background"></div>
              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">Модуль 11-12: Закрепление и профилактика</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Недели 11-12</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    План предотвращения рецидивов, долгосрочная стратегия, интеграция в повседневную жизнь
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">План действий</span>
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Стратегия поддержки</span>
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Подведение итогов</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Что вы получаете</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-accent bg-gradient-to-br from-accent/5 to-transparent">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Infinity" size={28} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold">Пожизненная поддержка</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Неограниченный доступ к материалам курса и возможность консультироваться со специалистами в любой момент вашей жизни
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Еженедельные групповые сессии</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Индивидуальные консультации при необходимости</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Доступ к обновлениям программы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary bg-gradient-to-br from-secondary/5 to-transparent">
              <CardContent className="pt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={28} className="text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold">Закрытое сообщество</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Доступ к приватному сообществу выпускников — безопасное пространство для обмена опытом и взаимной поддержки
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">Модерируемый чат 24/7</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">Партнёры по подотчётности</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">Регулярные встречи и вебинары</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
                  <label htmlFor="phone" className="text-sm font-medium">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
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
                <p>Email: support@recovery-program.com</p>
                <p>Телефон: +7 (800) 123-45-67</p>
                <p>Круглосуточная поддержка</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Конфиденциальность</h3>
              <p className="text-primary-foreground/80 text-sm">
                Мы гарантируем полную анонимность и защиту ваших персональных данных
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 Программа восстановления. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
