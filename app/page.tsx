import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  MapPin,
  Calendar,
  Star,
  CheckCircle,
  Menu,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Clock,
  Users,
  TrendingUp,
  Award,
  Heart,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-8">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-teal-600" />
            <span className="text-xl font-bold text-teal-600">CliniFacil</span>
          </div>

          {/* Mobile menu button */}
          <button className="block md:hidden">
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#clinicas" className="text-sm font-medium hover:text-teal-600">
              Clínicas
            </Link>
            <Link href="#noticias" className="text-sm font-medium hover:text-teal-600">
              Notícias
            </Link>
            <Link href="#planos" className="text-sm font-medium hover:text-teal-600">
              Planos
            </Link>
            <Link href="#sobre" className="text-sm font-medium hover:text-teal-600">
              Sobre
            </Link>
            <Button className="bg-teal-600 hover:bg-teal-700" asChild>
              <Link href="#cadastro">Cadastre sua Clínica</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-teal-800">
                    Encontre as melhores clínicas da sua região
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Conectamos você às melhores clínicas e profissionais de saúde perto de você. Busque, compare e
                    agende consultas em um só lugar.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700" asChild>
                    <Link href="#buscar">Buscar Clínicas</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50"
                    asChild
                  >
                    <Link href="#cadastro">Para Clínicas</Link>
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto aspect-video overflow-hidden rounded-xl lg:order-last">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Profissionais de saúde"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Busca */}
        <section className="w-full py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Especialidade ou nome da clínica"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cidade ou bairro"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700 py-3 px-6">Buscar</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Clínicas em Destaque */}
        <section id="clinicas" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-teal-800">Clínicas em Destaque</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Conheça as clínicas mais bem avaliadas pelos usuários
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    fill
                    alt="Clínica Saúde Total"
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-teal-600">Destaque</Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>Clínica Saúde Total</CardTitle>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />
                    <span className="text-sm text-gray-600 ml-1">(48)</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Centro, Rio de Janeiro</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span>Cardiologia, Clínica Geral, Pediatria</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Atendimento humanizado com os melhores especialistas da região.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Ver Detalhes</Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    fill
                    alt="Centro Médico Bem Estar"
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-teal-600">Destaque</Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>Centro Médico Bem Estar</CardTitle>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4" />
                    <span className="text-sm text-gray-600 ml-1">(36)</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Botafogo, Rio de Janeiro</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span>Ortopedia, Fisioterapia, Nutrição</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Tratamentos integrados para sua saúde física e mental.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Ver Detalhes</Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    fill
                    alt="Instituto Saúde Plena"
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-teal-600">Destaque</Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>Instituto Saúde Plena</CardTitle>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />
                    <Star className="h-4 w-4 fill-amber-500" />
                    <span className="text-sm text-gray-600 ml-1">(52)</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Tijuca, Rio de Janeiro</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span>Dermatologia, Endocrinologia, Psicologia</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Tecnologia de ponta e profissionais renomados ao seu dispor.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Ver Detalhes</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                Ver Todas as Clínicas
              </Button>
            </div>
          </div>
        </section>

        {/* Painel de Notícias */}
        <section id="noticias" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-teal-800">Notícias e Artigos</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Fique por dentro das últimas novidades da área da saúde
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    fill
                    alt="Notícia sobre saúde"
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>12 de Maio, 2023</span>
                  </div>
                  <CardTitle className="text-lg">Os benefícios da telemedicina no atendimento primário</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Descubra como a telemedicina está revolucionando o acesso aos cuidados de saúde primários...
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-teal-600 p-0">
                    Ler mais
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    fill
                    alt="Notícia sobre saúde"
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>5 de Maio, 2023</span>
                  </div>
                  <CardTitle className="text-lg">
                    Novas tecnologias para diagnóstico precoce de doenças cardíacas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Conheça as inovações tecnológicas que estão transformando o diagnóstico de doenças cardíacas...
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-teal-600 p-0">
                    Ler mais
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    fill
                    alt="Notícia sobre saúde"
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>28 de Abril, 2023</span>
                  </div>
                  <CardTitle className="text-lg">A importância da saúde mental no ambiente de trabalho</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Entenda por que as empresas estão investindo cada vez mais em programas de saúde mental...
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-teal-600 p-0">
                    Ler mais
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                Ver Todas as Notícias
              </Button>
            </div>
          </div>
        </section>

        {/* Planos Premium */}
        <section id="planos" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-teal-800">
                  Planos Premium para Clínicas
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Aumente sua visibilidade e atraia mais pacientes com nossos planos exclusivos
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Básico</CardTitle>
                  <CardDescription>Para clínicas iniciantes</CardDescription>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">R$99</span>
                    <span className="ml-1 text-sm text-muted-foreground">/mês</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Perfil básico da clínica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Até 3 especialidades</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Apareça nos resultados de busca</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Suporte por e-mail</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Assinar Agora</Button>
                </CardFooter>
              </Card>

              <Card className="border-teal-600 shadow-lg">
                <div className="px-4 py-1 text-xs font-bold bg-teal-600 text-white rounded-full w-fit mx-auto -mt-3 mb-2">
                  MAIS POPULAR
                </div>
                <CardHeader>
                  <CardTitle>Profissional</CardTitle>
                  <CardDescription>Para clínicas em crescimento</CardDescription>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">R$199</span>
                    <span className="ml-1 text-sm text-muted-foreground">/mês</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Perfil completo da clínica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Até 10 especialidades</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Destaque nos resultados de busca</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Agendamento online</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Suporte prioritário</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Assinar Agora</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>Para clínicas estabelecidas</CardDescription>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">R$349</span>
                    <span className="ml-1 text-sm text-muted-foreground">/mês</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Perfil premium da clínica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Especialidades ilimitadas</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Posição de destaque na página inicial</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Agendamento online avançado</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Relatórios de desempenho</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-teal-600" />
                      <span>Suporte 24/7</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Assinar Agora</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="w-full py-12 md:py-24 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-teal-800">
                  Por que escolher o CliniFacil?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Benefícios para clínicas e pacientes em uma única plataforma
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-teal-100 p-3">
                  <TrendingUp className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium">Mais Visibilidade</h3>
                <p className="text-sm text-gray-600">Aumente a visibilidade da sua clínica e atraia novos pacientes.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-teal-100 p-3">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium">Mais Pacientes</h3>
                <p className="text-sm text-gray-600">Conecte-se com pacientes que estão buscando seus serviços.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-teal-100 p-3">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium">Economia de Tempo</h3>
                <p className="text-sm text-gray-600">Gerencie agendamentos e comunicações em um só lugar.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="rounded-full bg-teal-100 p-3">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium">Credibilidade</h3>
                <p className="text-sm text-gray-600">
                  Avaliações e depoimentos que aumentam a confiança dos pacientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="cadastro" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-teal-800">
                  Pronto para aumentar a visibilidade da sua clínica?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                  Junte-se a milhares de clínicas que já estão crescendo com o CliniFacil.
                </p>
              </div>
              <div className="mx-auto w-full max-w-lg space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Nome da Clínica"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Telefone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Cidade"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 py-6 text-lg">Cadastrar Minha Clínica</Button>
                <p className="text-xs text-gray-500">
                  Ao se cadastrar, você concorda com nossos{" "}
                  <Link href="#" className="text-teal-600 hover:underline">
                    Termos de Serviço
                  </Link>{" "}
                  e{" "}
                  <Link href="#" className="text-teal-600 hover:underline">
                    Política de Privacidade
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-teal-600" />
                <span className="text-xl font-bold text-teal-600">CliniFacil</span>
              </div>
              <p className="text-sm text-gray-600">Conectando pacientes às melhores clínicas da região.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-500 hover:text-teal-600">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-teal-600">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-teal-600">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Para Pacientes</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Buscar Clínicas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Agendar Consultas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Avaliações
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Blog de Saúde
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Para Clínicas</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Cadastrar Clínica
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Planos Premium
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Painel Administrativo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-teal-600">
                    Suporte para Clínicas
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Contato</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-teal-600" />
                  <span className="text-gray-600">(21) 3456-7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-teal-600" />
                  <span className="text-gray-600">contato@clinifacil.com.br</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal-600" />
                  <span className="text-gray-600">Rio de Janeiro, RJ</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} CliniFacil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
