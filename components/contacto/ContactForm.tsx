'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
}

const emptyForm: FormData = { nombre: '', empresa: '', email: '', telefono: '', mensaje: '' };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});
  // Honeypot: campo invisible para humanos; los bots tienden a rellenarlo.
  const [website, setWebsite] = useState('');

  function validate(): boolean {
    const errs: Partial<FormData> = {};
    if (!form.nombre.trim()) errs.nombre = 'El nombre es requerido.';
    if (!form.email.trim()) errs.email = 'El correo es requerido.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Correo inválido.';
    if (!form.telefono.trim()) errs.telefono = 'El teléfono es requerido.';
    if (!form.mensaje.trim()) errs.mensaje = 'El mensaje es requerido.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // Si el honeypot trae texto, es un bot: simulamos éxito y no enviamos nada.
    if (website) {
      setStatus('success');
      setForm(emptyForm);
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/contacto.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm(emptyForm);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <CheckCircle size={48} className="text-green-500" />
        <h3 className="text-xl font-bold text-primary">¡Mensaje enviado!</h3>
        <p className="text-slate-500 text-sm max-w-xs">
          Gracias por contactarnos. Te responderemos a la brevedad posible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot anti-spam: oculto para usuarios reales, no enviar datos aquí. */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            placeholder="Tu nombre"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors ${
              errors.nombre ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50 focus:border-primary'
            }`}
          />
          {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Empresa
          </label>
          <input
            type="text"
            value={form.empresa}
            onChange={(e) => setForm({ ...form, empresa: e.target.value })}
            placeholder="Nombre de tu empresa"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:border-primary text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="tu@correo.com"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors ${
              errors.email ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50 focus:border-primary'
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            placeholder="+504 0000-0000"
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors ${
              errors.telefono ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50 focus:border-primary'
            }`}
          />
          {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
          Mensaje / Necesidad <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          value={form.mensaje}
          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          placeholder="Cuéntanos sobre tu empresa y qué necesitas..."
          className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors resize-none ${
            errors.mensaje ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50 focus:border-primary'
          }`}
        />
        {errors.mensaje && <p className="text-red-500 text-xs mt-1">{errors.mensaje}</p>}
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          Ocurrió un error al enviar el mensaje. Intenta de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={16} />
            Enviar mensaje
          </>
        )}
      </button>
    </form>
  );
}
