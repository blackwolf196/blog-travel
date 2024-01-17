create table
  public.user_info (
    id uuid not null default gen_random_uuid (),
    user_id uuid not null,
    first_login boolean not null default true,
    full_name text null default ''::text,
    phone text null,
    constraint user_info_pkey primary key (id),
    constraint user_info_user_id_fkey foreign key (user_id) references auth.users (id) on update cascade on delete cascade
  ) tablespace pg_default;
  alter table public.user_info enable row level security;
  create policy "Can view own user data." on public.user_info for select using (auth.uid() = user_id);
  create policy "Can insert own user data." on public.user_info for insert with check (auth.uid () = user_id);
  create policy "Can update own user data." on public.user_info for update using (auth.uid() = user_id);

create schema if not exists private;
create table
  private.user_admin (
    id uuid not null default gen_random_uuid (),
    user_id uuid not null,
    admin boolean null default false,
    constraint user_admin_pkey primary key (id),
    constraint user_admin_user_id_fkey foreign key (user_id) references auth.users (id) on update cascade on delete cascade
  ) tablespace pg_default;
  alter table private.user_admin enable row level security;

  --   INSERT INTO private.user_admin (user_id, admin)
  --   VALUES ('3e3d00cc-c06a-482e-bae4-6efb382d0e01', true);

  CREATE OR REPLACE FUNCTION check_admin(input_user_id uuid) returns boolean AS
    $$
    select admin from private.user_admin
    where user_id = input_user_id
    $$ stable language sql security definer;