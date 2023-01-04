export {};
import 'vue-router';
import { role } from '@/types/user';
// declare module is used when module already exists
declare module 'vue-router' {
  interface RouteMeta {
    roles?: role[];
    title?: string;
    keepAlive?: boolean;
  }
}
