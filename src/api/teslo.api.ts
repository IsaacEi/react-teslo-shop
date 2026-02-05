import { useAuthStore } from '@/auth/stores/auth.store';
import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
const tesloApi  =  axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

//Success conection interceptor
const success: (response: AxiosResponse) => any = (response: AxiosResponse) =>
  response;
//Failed conection interceptor
const error: (error: AxiosError) => Promise<never> = async (
  error: AxiosError
) => {
  try {
    const { message }: any = error.response?.data;
    const errorObject: any = error.response?.data;
    const code: number | undefined = error.response?.status;
    const status: string | undefined = error.response?.statusText;

    if (code === 401) {
      const logout = useAuthStore.getState().logout;
      logout();
      return Promise.reject({
        status,
        message,
        code,
        errorObject,
      });
    }
    return Promise.reject({
      status,
      message,
      code,
      errorObject,
    });
  } catch (err) {
    const errorDefault = {
      status: "error",
      message:
        "There is an error while trying to make the request, please try again later.",
      code: 500,
      errorObject: {},
    };
    return Promise.reject(errorDefault);
  }
};

//Configuration interceptor
const config = (config: InternalAxiosRequestConfig<any>) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};

tesloApi.interceptors.request.use(config);
tesloApi.interceptors.response.use(success, error);

export { tesloApi };
