import { useState } from 'react';
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

import { defaultValues } from "./types";
import type { IFormLogin } from "./types";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  const onSubmit = (data: IFormLogin) => {
    setIsLoading(true);
    console.log("Form data:", data);
    
    setTimeout(() => {
      setIsLoading(false);
      alert(`Login realizado com sucesso!\nEmail: ${data.email}`);
    }, 1500);
  };

  const toggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
      <div className="auth-gradient w-full md:w-1/2 lg:w-2/5 md:h-screen flex items-center justify-center text-white p-8 rounded-3xl md:rounded-none">
        <div className="text-center max-w-md">
          <div className="animate-float mx-auto mb-6 bg-white/20 backdrop-blur-sm p-5 rounded-full w-24 h-24 flex items-center justify-center">
            <FiLock className="text-white" size={40} />
          </div>
          <h1 className="text-4xl font-bold mb-4">Bem-vindo de volta!</h1>
          <p className="text-xl opacity-90">
            {isRegisterMode
              ? "Já tem uma conta? Faça login para continuar"
              : "Entre na sua conta para acessar sua dashboard"}
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-3/5 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500">
          <div className="p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {isRegisterMode ? "Crie sua conta" : "Faça seu login"}
              </h2>
              <p className="text-gray-600">
                {isRegisterMode
                  ? "Preencha os campos para se registrar"
                  : "Entre com seu e-mail e senha"}
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {isRegisterMode && (
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2 font-medium">Nome completo</label>
                  <div className="relative rounded-xl overflow-hidden border-2 border-gray-200 hover:border-primary focus-within:border-primary transition-all duration-300 bg-white">
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      className="w-full px-5 py-4 pl-12 text-gray-700 bg-transparent outline-none placeholder-gray-500"
                    />
                    <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  </div>
                </div>
              )}

              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">E-mail</label>
                <div className="relative">
                  <Input
                    name="email"
                    placeholder="      seu@email.com"
                    control={control}
                    errorMessage={errors?.email?.message}
                  />
                  <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 mb-2 font-medium">Senha</label>
                <div className="relative">
                  <Input
                    name="password"
                    type="password"
                    placeholder="      Sua senha"
                    control={control}
                    errorMessage={errors?.password?.message}
                  />
                  <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                </div>
              </div>

              {!isRegisterMode && (
                <div className="text-right mb-6">
                  <a href="#" className="text-primary font-medium hover:underline text-sm">
                    Esqueceu sua senha?
                  </a>
                </div>
              )}

              <Button 
                title={isLoading ? "Carregando..." : (isRegisterMode ? "Registrar" : "Entrar")} 
                disabled={!isValid || isLoading}
              />

              <div className="mt-6 text-center text-gray-600">
                <p>
                  {isRegisterMode ? "Já tem uma conta?" : "Não tem uma conta?"}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="text-primary font-medium hover:underline ml-2"
                  >
                    {isRegisterMode ? "Faça login" : "Crie uma conta"}
                  </button>
                </p>
              </div>
            </form>

            <div className="mt-10">
              <div className="relative flex items-center py-5">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-500">ou continue com</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <button className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                </button>
                <button className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                </button>
                <button className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 text-center py-5 text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} AuthSecure. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;