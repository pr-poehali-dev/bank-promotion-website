import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Icon name="Building2" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Альфа Партнеры</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О нас</a>
            <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">Продукты</a>
            <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Обучение</a>
            <a href="#careers" className="text-gray-600 hover:text-blue-600 transition-colors">Вакансии</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Регистрация</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
            Партнерская программа Альфа-Банка
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Начните карьеру в банковской сфере
            <span className="text-blue-600"> с Альфа-Банком</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к команде агентов крупнейшего частного банка России. 
            Продвигайте банковские продукты, получайте достойный доход и развивайтесь профессионально.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Стать партнером
            </Button>
            <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50">
              <Icon name="Play" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">18+</div>
            <div className="text-gray-600">Минимальный возраст</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">0₽</div>
            <div className="text-gray-600">Стоимость обучения</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-600">Поддержка</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600">Удаленная работа</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">О партнерской программе</h2>
            <p className="text-lg text-gray-600">
              Мы предлагаем уникальную возможность работать с продуктами Альфа-Банка 
              на выгодных условиях с многоуровневой системой вознаграждений.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-blue-600" />
                </div>
                <CardTitle>Высокий доход</CardTitle>
                <CardDescription>
                  Многоуровневая система комиссий и бонусы за результат
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="GraduationCap" size={32} className="text-green-600" />
                </div>
                <CardTitle>Бесплатное обучение</CardTitle>
                <CardDescription>
                  Полная подготовка к работе с продуктами банка
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-orange-500" />
                </div>
                <CardTitle>Гибкий график</CardTitle>
                <CardDescription>
                  Работайте в удобное время из любой точки России
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Продукты для продвижения</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Работайте с широкой линейкой банковских продуктов и получайте комиссию за каждую сделку
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="CreditCard" size={24} className="text-blue-600" />
                  <Badge variant="secondary">Популярное</Badge>
                </div>
                <CardTitle>Кредитные карты</CardTitle>
                <CardDescription>
                  До 100 дней без процентов, высокие лимиты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">до 5%</div>
                <div className="text-sm text-gray-600">комиссия за оформление</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="PiggyBank" size={24} className="text-green-600" />
                  <Badge variant="outline">Выгодно</Badge>
                </div>
                <CardTitle>Депозиты</CardTitle>
                <CardDescription>
                  Высокие процентные ставки, гибкие условия
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">до 3%</div>
                <div className="text-sm text-gray-600">комиссия за привлечение</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon name="Banknote" size={24} className="text-orange-500" />
                  <Badge variant="secondary">Новое</Badge>
                </div>
                <CardTitle>Потребительские кредиты</CardTitle>
                <CardDescription>
                  Быстрое одобрение, минимум документов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">до 7%</div>
                <div className="text-sm text-gray-600">комиссия за сделку</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Программа обучения</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Получите все необходимые знания для успешной работы с банковскими продуктами
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Онлайн-курсы</h3>
                      <p className="text-gray-600">Изучите продуктовую линейку и техники продаж</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Практические занятия</h3>
                      <p className="text-gray-600">Отработайте навыки работы с клиентами</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Сертификация</h3>
                      <p className="text-gray-600">Получите официальный сертификат партнера</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Что вы получите:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-green-300" />
                    <span>Доступ к обучающим материалам</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-green-300" />
                    <span>Персональный куратор</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-green-300" />
                    <span>Техническая поддержка</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Check" size={20} className="text-green-300" />
                    <span>Маркетинговые материалы</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Вакансии и возможности</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий формат работы и начните карьеру уже сегодня
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <Icon name="Users" size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Агент по продажам</h3>
                <Badge className="bg-green-100 text-green-700">Самозанятость</Badge>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="text-gray-600">Работа с физическими лицами</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="text-gray-600">Гибкий график</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="text-gray-600">Доход от 50 000 ₽</span>
                </li>
              </ul>
              <Button className="w-full">Подать заявку</Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <Icon name="Briefcase" size={48} className="text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Менеджер по развитию</h3>
                <Badge className="bg-blue-100 text-blue-700">ГПХ</Badge>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="text-gray-600">Развитие агентской сети</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="text-gray-600">Обучение новичков</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="text-gray-600">Доход от 80 000 ₽</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Подать заявку</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Начните работу с Альфа-Банком</h2>
              <p className="text-lg text-gray-600">
                Заполните форму, и мы свяжемся с вами в течение 24 часов
              </p>
            </div>

            <Card className="p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Имя</Label>
                    <Input id="firstName" placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input id="lastName" placeholder="Введите вашу фамилию" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="city">Город</Label>
                  <Input id="city" placeholder="Введите ваш город" />
                </div>
                <Separator />
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="agree" className="rounded" />
                  <Label htmlFor="agree" className="text-sm text-gray-600">
                    Согласен с <a href="#" className="text-blue-600 hover:underline">условиями обработки персональных данных</a>
                  </Label>
                </div>
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Building2" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">Альфа Партнеры</span>
              </div>
              <p className="text-gray-400">
                Официальная партнерская программа Альфа-Банка
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукты</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Кредитные карты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Депозиты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Кредиты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>8 (800) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>partners@alfabank.ru</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Альфа-Банк. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;