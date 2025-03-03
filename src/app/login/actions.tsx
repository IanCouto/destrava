'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { SignOutScope } from '@/lib/typings'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

/**
 * Supabase Auth allows you to specify three different scopes for when a user invokes the sign out API in your application:
 * global (default) when all sessions active for the user are terminated.
 * local which only terminates the current session for the user but keep sessions on other devices or browsers active.
 * others to terminate all but the current session for the user.
 */
export async function signOut(scope: SignOutScope = 'global') {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut({ scope })

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}