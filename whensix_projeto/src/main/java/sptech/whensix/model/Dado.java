package sptech.whensix.model;

public class Dado {
    private int cdgCidade;
    private int sexo;
    private float peso;
    private int altura;
    private int frequenciaRefri;
    private int qtdRefri;
    private boolean alcoolismo;
    private int freqAlcool;
    private boolean exercicioFisico;
    private int tipoExercicioFisico;
    private int freqExercicioFisico;
    private boolean fumante;
    private int qtdCigarrosDia;
    private double pesoRake;
    private float imc;
    private boolean excPeso; // <-- Corrigido aqui
    private boolean obesidade;
    private boolean depressao;

    public int getCdgCidade() {
        return cdgCidade;
    }

    public void setCdgCidade(int cdgCidade) {
        this.cdgCidade = cdgCidade;
    }

    public int getSexo() {
        return sexo;
    }

    public void setSexo(int sexo) {
        this.sexo = sexo;
    }

    public float getPeso() {
        return peso;
    }

    public void setPeso(float peso) {
        this.peso = peso;
    }

    public int getAltura() {
        return altura;
    }

    public void setAltura(int altura) {
        this.altura = altura;
    }

    public int getFrequenciaRefri() {
        return frequenciaRefri;
    }

    public void setFrequenciaRefri(int frequenciaRefri) {
        this.frequenciaRefri = frequenciaRefri;
    }

    public int getQtdRefri() {
        return qtdRefri;
    }

    public void setQtdRefri(int qtdRefri) {
        this.qtdRefri = qtdRefri;
    }

    public boolean isAlcoolismo() {
        return alcoolismo;
    }

    public void setAlcoolismo(boolean alcoolismo) {
        this.alcoolismo = alcoolismo;
    }

    public int getFreqAlcool() {
        return freqAlcool;
    }

    public void setFreqAlcool(int freqAlcool) {
        this.freqAlcool = freqAlcool;
    }

    public boolean isExercicioFisico() {
        return exercicioFisico;
    }

    public void setExercicioFisico(boolean exercicioFisico) {
        this.exercicioFisico = exercicioFisico;
    }

    public int getTipoExercicioFisico() {
        return tipoExercicioFisico;
    }

    public void setTipoExercicioFisico(int tipoExercicioFisico) {
        this.tipoExercicioFisico = tipoExercicioFisico;
    }

    public int getFreqExercicioFisico() {
        return freqExercicioFisico;
    }

    public void setFreqExercicioFisico(int freqExercicioFisico) {
        this.freqExercicioFisico = freqExercicioFisico;
    }

    public boolean isFumante() {
        return fumante;
    }

    public void setFumante(boolean fumante) {
        this.fumante = fumante;
    }

    public int getQtdCigarrosDia() {
        return qtdCigarrosDia;
    }

    public void setQtdCigarrosDia(int qtdCigarrosDia) {
        this.qtdCigarrosDia = qtdCigarrosDia;
    }

    public double getPesoRake() {
        return pesoRake;
    }

    public void setPesoRake(double pesoRake) {
        this.pesoRake = pesoRake;
    }

    public float getImc() {
        return imc;
    }

    public void setImc(float imc) {
        this.imc = imc;
    }

    public boolean isExcPeso() {
        return excPeso;
    }

    public void setExcPeso(boolean excPeso) {
        this.excPeso = excPeso;
    }

    public boolean isObesidade() {
        return obesidade;
    }

    public void setObesidade(boolean obesidade) {
        this.obesidade = obesidade;
    }

    public boolean isDepressao() {
        return depressao;
    }

    public void setDepressao(boolean depressao) {
        this.depressao = depressao;
    }
}
